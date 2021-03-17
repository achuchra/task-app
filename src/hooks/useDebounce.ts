import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [searchedValue, setSearchedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value) {
        setSearchedValue(value);
      }
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return searchedValue;
};

export default useDebounce;
