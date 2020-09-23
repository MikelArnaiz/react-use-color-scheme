import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useColorScheme } from '../src/useColorScheme';
import { useIsDarkMode } from '../src/useIsDarkMode';
import { ColorScheme } from '../src/ColorScheme';
import { useIsColorScheme } from '../src/useIsColorScheme';

const App = () => {
  const isDarkMode = useIsDarkMode();
  const colorScheme = useColorScheme();
  const isLightMode = useIsColorScheme(ColorScheme.Light);

  return (
    <div>
      <p>Is dark mode? {isDarkMode ? 'Yeah' : 'Noop'}</p>
      <p>Color scheme: {colorScheme}</p>
      <p>Is light mode? {isLightMode ? 'Yeah' : 'Noop'}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
