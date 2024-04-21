import { useState } from 'react'
import './App.css'
import Bodysection from './components/Bodysection'
import Modal from './components/Modal'
import TopSection from './components/TopSection'

function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
        {isModal&&<Modal setIsModal={setIsModal}/>}
        <TopSection setIsModal={setIsModal}/>
        <Bodysection setIsModal={setIsModal}/>
    </>
  )
}

export default App
