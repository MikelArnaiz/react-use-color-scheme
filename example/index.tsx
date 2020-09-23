import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useColorScheme } from '../src/useColorScheme';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <div>
      <h3>{colorScheme}</h3>;
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
