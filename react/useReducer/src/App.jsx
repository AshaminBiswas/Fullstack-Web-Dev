import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  //  const reducer = (state, action) =>{
  //     switch (action.type) {
  //       case "Increment":
  //         return {count: state.count + 1}
  //       case "Decrement":
  //         return {count: state.count - 1}
  //       case "Reset":
  //         return {count : 0}
  //       default :
  //       return state
  //     }
  // }

  const initialState = {
    name:"",
    email:"",
    password:""
  }
  const reducer = (state, action)=>{
    switch(action.type){
      case "UPDATE_FORM":
        return{
          ...state,
          [action.payload.field]:action.payload.value
        }
      case "RESET":
        return initialState

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
 const handleChange = (e)=>{
    dispatch(
      {
        type:"UPDATE_FORM",
        payload:{
          field:e.target.name,
          value:e.target.value
        }
      }
    )
 }

 const handleReset = ()=>{
    dispatch(
      {
        type:"RESET"
      }
    )
 }
  return (
    <>
     {/* <h1>Count is : {state.count}</h1>
     <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
     <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
     <button onClick={()=>dispatch({type:"Reset"})}>Reset</button> */}

     <input type="text" placeholder='enter name' name="name" value={state.name}
      onChange={handleChange}
     />
     <input type="email" placeholder='enter email' name="email" value={state.email}
      onChange={handleChange}
     />
     <input type="password" placeholder='enter password' name="password" value={state.password}
      onChange={handleChange}
     />
     <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
