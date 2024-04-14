// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Route} from "react-router-dom"
import './App.css'
import Welcome from "./components/Welcome"
import Products from "./components/Products"
import Navbar from "./components/Navbar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Route path="/welcome">
            <Welcome/>
      </Route>
      <Route path="/about">
            <Products/>
      </Route>
    </>
  )
}

export default App
