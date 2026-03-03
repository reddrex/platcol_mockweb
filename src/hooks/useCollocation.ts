import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { CollocationDetail, Example, TranslationLink, RelatedCollocation } from '../types/collocation';

export function useCollocation(id: string | undefined) {
  const [collocation, setCollocation] = useState<CollocationDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setCollocation(null);

    async function fetchEntry() {
      try {
        // Fetch collocation base data + usage_notes
        const { data: col, error: colError } = await supabase
          .from('collocations')
          .select('id, language, collocation, base_word, collocate, structure, domain, cefr_level, definition, usage_notes')
          .eq('id', id)
          .single();

        if (colError || !col) {
          if (!cancelled) {
            setError(colError?.message ?? 'Collocation not found');
            setLoading(false);
          }
          return;
        }

        // Fetch examples
        const { data: examplesData } = await supabase
          .from('examples')
          .select('sentence, sort_order')
          .eq('collocation_id', id)
          .order('sort_order', { ascending: true });

        // Fetch translation links with target collocation data
        const { data: translationsData } = await supabase
          .from('collocation_translations')
          .select('target_id, collocations!collocation_translations_target_id_fkey(id, language, collocation)')
          .eq('source_id', id);

        // Fetch related collocations with their data
        const { data: relatedData } = await supabase
          .from('related_collocations')
          .select('related_id, collocations!related_collocations_related_id_fkey(id, collocation, structure, definition)')
          .eq('collocation_id', id)
          .order('sort_order', { ascending: true });

        if (!cancelled) {
          const examples: Example[] = (examplesData ?? []) as Example[];

          const translations: TranslationLink[] = (translationsData ?? [])
            .map((t: { collocations: { id: string; language: string; collocation: string } | null }) => t.collocations)
            .filter(Boolean) as TranslationLink[];

          const related: RelatedCollocation[] = (relatedData ?? [])
            .map((r: { collocations: { id: string; collocation: string; structure: string; definition: string } | null }) => r.collocations)
            .filter(Boolean) as RelatedCollocation[];

          setCollocation({
            ...col,
            examples,
            translations,
            related,
          } as CollocationDetail);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setLoading(false);
        }
      }
    }

    fetchEntry();
    return () => { cancelled = true; };
  }, [id]);

  return { collocation, loading, error };
}
