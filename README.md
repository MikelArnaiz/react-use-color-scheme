Hooks for Color Scheme

## Usage

```jsx
const App = () => {
  const isDarkMode = useIsDarkMode(); // true or false
  const colorScheme = useColorScheme(); // 'dark', 'light' or 'no-preference'
  const isLightMode = useIsColorScheme(ColorScheme.Light); // true or false

  return (
    <div>
      <p>Is dark mode? {isDarkMode ? 'Yeah' : 'Noop'}</p>
      <p>Color scheme: {colorScheme}</p>
      <p>Is light mode? {isLightMode ? 'Yeah' : 'Noop'}</p>
    </div>
  );
};
```
