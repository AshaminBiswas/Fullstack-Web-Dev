import { useState } from 'react'
import './App.css'
import BackgroundChanger from './component/BackgroundChanger'
function App() {
  const [color, setColor] = useState("olive")

  function changeColor(color) {
    setColor(color)
  }


  return (
    <div className='w-full h-screen bg-amber-400' style={{ backgroundColor: color }}>
      {/* <BackgroundChanger /> */}

      <div className=' fixed flex flex-wrap justify-center items-center bottom-12 px-2'>
        <div className='flex flex-wrap gap-4 justify-center rounded-3xl px-4 py-2 bg-white'>
          <button onClick={() => setColor("red")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1 '>Red</button>
          <button onClick={() => setColor("olive")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Olive</button>
          <button onClick={() => setColor("green")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Green</button>
          <button onClick={() => setColor("black")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Black</button>
          <button onClick={() => setColor("yellow")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Yellow</button>
          <button onClick={() => setColor("blue")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Blue</button>
          <button onClick={() => setColor("pink")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Pink</button>
          <button onClick={() => setColor("purple")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Purple</button>
          <button onClick={() => setColor("orange")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>Orange</button>
          <button onClick={() => setColor("white")} className='rounded-full text-black font-semibold shadow-lg px-4 py-1'>White</button>

        </div>

      </div>
    </div>
  )
}

export default App
