// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Route} from "react-router-dom"
import './App.css'
import Welcome from "./components/Welcome"
import Products from "./components/Products"
import Navbar from "./components/Navbar"
import ProductDetail from "./components/ProductDetail"
import About from "./components/About"
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min"
import "./components/Nav.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/product"/>
      </Route>
      <Route path="/welcome">
            <Welcome/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/product" exact>
            <Products/>
      </Route>
      <Route path="/product/:productId">
         <ProductDetail/>
      </Route>
      </Switch>
    </>
  )
}

export default App
