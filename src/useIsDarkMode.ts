import { useIsColorScheme } from './useIsColorScheme';
import { ColorScheme } from './ColorScheme';

export const useIsDarkMode = () => {
  return useIsColorScheme(ColorScheme.Dark);
};
