import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copy")

  const passwordRef = useRef(null)
  const copyRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) string += "0123456789"
    if (characterAllowed) string += "!@#$%^&*_%"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  useEffect(() => {
    generatePassword()

  }, [length, numberAllowed, characterAllowed,])

  function copyPassword() {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()

  }




  return (
    <div className='bg-green-600 text-gray-900  h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-semibold text-center'>Password Generator</h1>
      <div className='flex justify-center items-center   rounded-xl p-4'>
        <input
          type="text"
          value={password}
          className='outline-none bg-white px-4 py-3 rounded-l-2xl'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
          className='bg-blue-700 px-4 py-3 rounded-r-2xl'
          onClick={copyPassword}
          ref={copyRef}
        >{copy}</button>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex gap-2'>
          <input
            type="range"
            name=""
            id="length"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length" className='text-xl font-semibold'>Length: {length}</label>
        </div>
        <div className='flex gap-2'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='number-checkbox'
            className='w-5 outline-none rounded-xl'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="number-checkbox" className='text-xl font-semibold'>Number Allowed</label>
        </div>
        <div className='flex gap-2'>
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id='character-checkbox'
            className='w-5 outline-none rounded-xl'
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="character-checkbox" className='text-xl font-semibold'>Character Allowed</label>
        </div>
      </div>
    </div>
  )
}

export default App
