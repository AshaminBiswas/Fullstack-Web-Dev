import { useState, useEffect } from 'react'
import Counter from './components/Counter'

function App() {

  const [counterState, setCounterState] = useState(true)


  return (
    <div>
      <button onClick={() => setCounterState(!counterState)}>Toggle</button>
      {counterState ? <Counter /> : ""}
    </div>
  )
}

export default App
