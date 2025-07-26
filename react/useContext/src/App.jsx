import { useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
// import the actual context
import { CounterContext } from './context/Counter'

import Card from './components/Card'
import Cart from './components/Cart'
function App() {

  // console.log(count);

  return (
    <div>
      {/* <h1>Count is: {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}


      <Card name='MackBook Pro' price={1000} />
      <Card name='Air Drop' price={500} />
      <Card name='Iphone 13' price={3000} />
      <Cart />
    </div>
  )
}

export default App
