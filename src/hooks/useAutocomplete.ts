import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { Language } from '../types/collocation';

export function useAutocomplete(query: string, language: Language, limit = 8) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      const { data } = await supabase
        .from('collocations')
        .select('collocation')
        .eq('language', language)
        .ilike('collocation', `%${query}%`)
        .order('collocation', { ascending: true })
        .limit(limit);

      setSuggestions((data ?? []).map((r: { collocation: string }) => r.collocation));
    }, 200);

    return () => clearTimeout(timer);
  }, [query, language, limit]);

  return suggestions;
}
