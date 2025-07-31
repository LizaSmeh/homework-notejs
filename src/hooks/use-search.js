import { useMemo } from "react";
import { useDebounseSearch } from "./use-debounse";

export const useSearch = ({ data, searchTerm, delay = 300 }) => {
  const debouncedSearchTerm = useDebounseSearch(searchTerm, delay);

  const filtered = useMemo(() => {
    if (!debouncedSearchTerm) return Object.entries(data);

    const lowercasedTerm = debouncedSearchTerm.toLowerCase();

    return Object.entries(data).filter(([id, { content }]) => {
      return content.toLowerCase().includes(lowercasedTerm);
    });
  }, [debouncedSearchTerm, data]);

  return filtered;
};
