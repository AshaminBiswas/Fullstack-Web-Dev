import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  // const [count, setCount] = useState(0)
   const reducer = (state, action) =>{
      if(action.type === "Increment")return state + 1
      if(action.type === "Decrement")return state - 1
  }
  const [count, dispatch] = useReducer(reducer, 0)

 

  return (
    <>
     <h1>Count is : {count}</h1>
     <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
     <button onClick={()=>dispatch({type:"Decrement"})}>Increment</button>
    </>
  )
}

export default App
