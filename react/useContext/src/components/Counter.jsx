import React from 'react'
import { CounterContext } from '../context/Counter'
import { useContext } from 'react'
function Counter() {

  const { count, setCount } = useContext(CounterContext)

  function handleCount() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)} >Increment</button>
      <button onClick={handleCount}>Decrement</button>
    </div>
  )
}

export default Counter
