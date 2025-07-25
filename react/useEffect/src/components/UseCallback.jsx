import React, { useCallback, useState } from 'react'

function UseCallback() {

  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("Good")

  const changeAdjective = () => {
    return "another"
  }

  return (
    <div>
      <div>
        <Navbar adjective={"Good"} changeAdjective={changeAdjective} />
      </div>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>UseCallback</button>


    </div>
  )
}

export default UseCallback


function Navbar({ adjective }) {

  console.log("navbar is rendered");

  return (
    <div>
      <p>I am A {adjective} Navbar</p>
    </div>
  )
}
