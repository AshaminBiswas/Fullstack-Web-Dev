import React from 'react'
import large from "../assets/large.json"
import { useMemo } from 'react'


function Mycomponent({ count, setCount }) {
  const length = large.length
  const getLength = (arr) => {
    for (let i = 1; i <= arr.length; i++)count++
    return count
  }
  const totalLength = useMemo(() => getLength(large), [])

  return (
    <div>
      <p>Large file length is {totalLength}</p>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  )
}

export default Mycomponent
