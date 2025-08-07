import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { CounterProvider } from './context/Counter.jsx'
import {TodoItemsContext} from "./context/TodoItems.jsx"
let arr = [{name:"lolo", age:20}]
createRoot(document.getElementById('root')).render(
  
    <TodoItemsContext.Provider value={arr}>
      <App />
    </TodoItemsContext.Provider>
  
)
