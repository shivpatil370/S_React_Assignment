import { useState } from 'react'
import Nav from './components/Nav'
import Modal from './modal/Modal'
import Products from './components/Products'
// import './App.css'

function App() {
  const [isModal, setIsModal] = useState(false)

  return (
    <>
    {isModal&&<Modal onSetIsModal={setIsModal}/>}
    <Nav setIsModal={setIsModal}/>
    <Products/>
    </>
  )
}

export default App
