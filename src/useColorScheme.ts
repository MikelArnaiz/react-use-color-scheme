import { useState, useEffect } from 'react';
import { ColorScheme } from './ColorScheme';
import { useIsColorScheme } from './useIsColorScheme';
import { entries } from './utils/object';

export const useColorScheme = (
  initialValue: ColorScheme = ColorScheme.NoPreference
): ColorScheme => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(initialValue);

  const isColorScheme: Record<ColorScheme, boolean> = {
    [ColorScheme.Dark]: useIsColorScheme(ColorScheme.Dark),
    [ColorScheme.Light]: useIsColorScheme(ColorScheme.Light),
    [ColorScheme.NoPreference]: useIsColorScheme(ColorScheme.NoPreference),
  };

  useEffect(() => {
    const [color] = entries(isColorScheme).find(
      ([_k, isActive]) => isActive
    ) ?? [initialValue, true];
    setColorScheme(color);
  }, [isColorScheme, initialValue]);

  return colorScheme;
};
