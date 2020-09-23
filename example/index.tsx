import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useColorScheme } from '../src/useColorScheme';
import { useIsDarkMode } from '../src/useIsDarkMode';

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = useIsDarkMode();

  return (
    <div>
      <p>Color scheme: {colorScheme}</p>
      <p>Is dark mode? {isDarkMode ? 'Yeah' : 'Noop'}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
