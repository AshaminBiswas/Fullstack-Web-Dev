import { useMemo, useState } from 'react'
import './App.css'
import Mycomponent from './components/Mycomponent'
function App() {
  const [count, setCount] = useState(0)
  // const [input, setInput] = useState(0)

  // function doubleValue(num) {
  //   for (let i = 1; i <= 1000000000; i++) { }
  //   return num * 2
  // }

  // const memoizeValue = useMemo(() => {
  //   return doubleValue(input)
  // }, [input])

  const num = new Array(3000000).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical: i === 2900000
    }
  })
  const [number, setNumber] = useState(num)

  const magical = useMemo(() => number.find((i) => i.isMagical === true), [number])


  return (
    <>
      {/* <Mycomponent count={count} setCount={setCount} />

      <h1>Use Memo</h1>

      <input type="number" value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Double value: {memoizeValue}</p> */}

      <p>{magical.index}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

    </>
  )
}

export default App
