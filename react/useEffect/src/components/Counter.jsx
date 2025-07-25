import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Component mount");

  }, [])

  useEffect(() => {
    // console.log("Component mount count updated");

  }, [count])


  useEffect(() => {
    console.log("Component mount count updated");
    return () => {
      console.log("component is unmount");
    }
  }, [count])
  return (
    <div>
      <div>
        <p style={{ fontSize: 30 }}>count: {count}</p>
        <button onClick={() => { setCount(count + 1) }}>Click</button>
      </div>
    </div>
  )
}

export default Counter
