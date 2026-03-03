import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { CollocationResult, Language, SearchMode, SearchFilters } from '../types/collocation';

export const PAGE_SIZE = 8;

export function useSearch(
  query: string,
  language: Language,
  mode: SearchMode,
  filters: SearchFilters,
  page: number
) {
  const [results, setResults] = useState<CollocationResult[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setTotalCount(0);
      return;
    }

    let cancelled = false;

    async function fetchResults() {
      setLoading(true);
      setError(null);

      try {
        let ids: string[] | null = null;

        // Modo literal: buscar primero en ejemplos para obtener los IDs
        if (mode === 'literal') {
          const { data: exampleMatches } = await supabase
            .from('examples')
            .select('collocation_id')
            .ilike('sentence', `%${query}%`);

          if (!exampleMatches || exampleMatches.length === 0) {
            if (!cancelled) {
              setResults([]);
              setTotalCount(0);
              setLoading(false);
            }
            return;
          }
          ids = [...new Set(exampleMatches.map((e: { collocation_id: string }) => e.collocation_id))];
        }

        let q = supabase
          .from('collocations')
          .select('id, language, collocation, base_word, collocate, structure, domain, cefr_level, definition', { count: 'exact' })
          .eq('language', language);

        if (mode === 'lemma') {
          q = q.ilike('collocation', `%${query}%`);
        } else if (mode === 'semantic') {
          q = q.ilike('definition', `%${query}%`);
        } else if (ids !== null) {
          q = q.in('id', ids);
        }

        if (filters.baseWord) q = q.ilike('base_word', `%${filters.baseWord}%`);
        if (filters.collocateWord) q = q.ilike('collocate', `%${filters.collocateWord}%`);
        if (filters.structure) q = q.eq('structure', filters.structure);
        if (filters.domain) q = q.eq('domain', filters.domain);

        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        q = q.range(from, to).order('collocation', { ascending: true });

        const { data, count, error: supabaseError } = await q;

        if (!cancelled) {
          if (supabaseError) {
            setError(supabaseError.message);
          } else {
            setResults((data as CollocationResult[]) ?? []);
            setTotalCount(count ?? 0);
          }
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setLoading(false);
        }
      }
    }

    fetchResults();
    return () => { cancelled = true; };
  }, [query, language, mode, filters.baseWord, filters.collocateWord, filters.structure, filters.domain, page]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return { results, totalCount, totalPages, loading, error };
}
