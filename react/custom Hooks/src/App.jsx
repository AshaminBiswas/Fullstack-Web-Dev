import React from 'react'
import useToggle from './useToggle'

const App = () => {
  const [value, toggleValue] = useToggle(false)
  return (
    <div>
      {value?<h1>Custom Hooks</h1>:null}
      <button onClick={()=>toggleValue(true)}>Click to Toggle</button>
    </div>
  )
}

export default App
