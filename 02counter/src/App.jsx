
import { useState } from 'react';
import './App.css'
function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter <= 0) return;
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value</button><br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
