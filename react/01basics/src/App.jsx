import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React course</h1>
      <h2>Counter value:{count}</h2>
      <button onClick={() => setCount(count + 1)}>add value</button>
      <button onClick={() => {
        if (count === 0) {
          return
        } else {
          setCount(count - 1)
        }
      }}>remove value</button>

    </>
  )
}

export default App
