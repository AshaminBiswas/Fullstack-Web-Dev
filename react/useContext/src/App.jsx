import { useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
// import the actual context
import { CounterContext } from './context/Counter'
function App() {
  const { count } = useContext(CounterContext)
  console.log(count);

  return (
    <div>
      <h1>Count is: {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
