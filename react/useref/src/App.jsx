import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let val = useRef(1)
  const button = useRef()
  const [time, setTime] = useState(0)
  let timerButton = useRef(null)


  const startTimer = () => {
    timerButton.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerButton.current)
    timerButton.current = null
  }

  const resetTimer = () => {
    stopTimer()
    setTime(0)
  }

  return (
    <div>
      <h1>useRef</h1>
      <div>
        <button onClick={(() => {
          setCount(count + 1)
          val.current += 1
          console.log("value is :", val.current)
        })}>Increment</button>
        <p>Count is: {count}</p>
      </div>

      <button ref={button}
        onClick={() => button.current.style.backgroundColor = "red"}
      >Button</button>

      <div>
        <h1>Stop Watch Time: {time}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

    </div>
  )
}

export default App
