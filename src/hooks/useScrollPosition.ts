import { useState, useCallback, useEffect } from 'react';

const useScrollPosition = (value: number): boolean => {
  const [valueReached, setValueReached] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > value) {
      setValueReached(true);
    } else {
      setValueReached(false);
    }
  }, [value]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, valueReached]);

  return valueReached;
};

export default useScrollPosition;
