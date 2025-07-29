import { useMemo, useState } from 'react'
import './App.css'
import Mycomponent from './components/Mycomponent'
function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function doubleValue(num) {
    for (let i = 1; i <= 1000000000; i++) { }
    return num * 2
  }

  const memoizeValue = useMemo(() => {
    return doubleValue(input)
  }, [input])





  return (
    <>
      <Mycomponent count={count} setCount={setCount} />

      <h1>Use Memo</h1>

      <input type="number" value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Double value: {memoizeValue}</p>
    </>
  )
}

export default App
