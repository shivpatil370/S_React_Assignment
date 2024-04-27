// import { useState } from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
      <Header/>
      <Auth/>
      <Counter/>
    </>
  )
}

export default App
