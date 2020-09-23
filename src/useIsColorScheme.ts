import { useEffect, useState } from 'react';
import { ColorScheme } from './ColorScheme';

export const useIsColorScheme = (colorScheme: ColorScheme) => {
  const [isColorScheme, setIsColorScheme] = useState<boolean>(false);

  const onChange = (ev: MediaQueryListEvent) => {
    setIsColorScheme(ev.matches);
  };

  useEffect(() => {
    const matcher = window.matchMedia(`(prefers-color-scheme: ${colorScheme})`);
    matcher.addEventListener('change', onChange);
    setIsColorScheme(matcher.matches);

    return () => {
      matcher.removeEventListener('change', onChange);
    };
  }, [colorScheme]);

  return isColorScheme;
};
