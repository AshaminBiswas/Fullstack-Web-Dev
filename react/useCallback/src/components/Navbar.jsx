import React, { memo } from 'react'
import { useMemo } from "react"
function Navbar({ adjective, getAdjective }) {
  console.log("rendered");

  return (
    <div>
      <h1>I am a {adjective} navbar</h1>
      <button onClick={() => getAdjective()}>Click</button>
    </div>
  )
}

export default memo(Navbar)
