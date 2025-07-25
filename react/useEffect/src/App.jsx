import { useState, useEffect, } from 'react'
import Counter from './components/Counter'
import UseCallback from "./components/UseCallback"
function App() {

  const [counterState, setCounterState] = useState(true)


  return (
    <div>
      <button onClick={() => setCounterState(!counterState)}>Toggle</button>
      {/* {counterState ? <Counter /> : ""} */}
      <UseCallback />
    </div>
  )
}

export default App
