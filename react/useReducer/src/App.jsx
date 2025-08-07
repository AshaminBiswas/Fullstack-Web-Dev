import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  // const [count, setCount] = useState(0)
   const reducer = (state, action) =>{
      switch (action.type) {
        case "Increment":
          return {count: state.count + 1}
        case "Decrement":
          return {count: state.count - 1}
        case "Reset":
          return {count : 0}
        default :
        return state
      }
  }

  const initialState = {
    count:0
  }

  const [state, dispatch] = useReducer(reducer, initialState)

 

  return (
    <>
     <h1>Count is : {state.count}</h1>
     <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
     <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
     <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </>
  )
}

export default App
