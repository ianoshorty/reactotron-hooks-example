import React, { useState as useStateOverride } from 'react';
import './App.css';

import useStateWrapper from './reactotronStateWatcher'
const useState = useStateWrapper(useStateOverride);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
