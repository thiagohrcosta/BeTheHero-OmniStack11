import React, { useState } from 'react';

import Header from './Header';

// JSX (JavaScript e XML)

function App() {
  const [counter, setCounter ] = useState(0);

  // Array [valor, função de atualização]

  function increment () {
    setCounter(counter + 1);
  }

  return (
    <div>
    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
