import { useEffect, useState } from 'react';

const DELAY = 500;

export const useDebounce = <D>(value: D, delay: number = DELAY): D => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return debounceValue;
};
