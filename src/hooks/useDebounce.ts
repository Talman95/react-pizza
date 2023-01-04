import { useEffect, useState } from 'react';

export const useDebounce = <D>(value: D, delay: number = 500) => {
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
