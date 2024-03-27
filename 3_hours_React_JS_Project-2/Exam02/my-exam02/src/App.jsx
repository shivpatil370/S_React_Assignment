import { useState } from 'react'
import Nav from './components/Nav'
import Modal from './modal/Modal'
import Products from './components/Products'
import FormProvide from './store/FormProvide'
// import './App.css'

function App() {
  const [isModal, setIsModal] = useState(false)

  return (
    <FormProvide>
    {isModal&&<Modal onSetIsModal={setIsModal}/>}
    <Nav setIsModal={setIsModal}/>
    <Products/>
    </FormProvide>
  )
}

export default App
