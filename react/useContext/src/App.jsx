import React from 'react'
import { useContext } from 'react'
import {TodoItemsContext} from './context/TodoItems';
function App() {

  const itemContext = useContext(TodoItemsContext)
  console.log(itemContext);
  

  return (
    <div>
      <h1>Use Context</h1>

      {itemContext.map((item,i)=>{
        return <div key={i}>
          <li>{item.name}</li>
          <li>{item.age}</li>
        </div>
      })}
    </div>
  )
}

export default App
