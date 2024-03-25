import { useState } from 'react'
// import './App.css'
import Modal from "./modal/Modal"

import BookMark from "./components/BookMark"
import AllBookMarks from './components/AllBookMarks'
import ContextApi from './contextApi/ContextApi'

function App() {
  const [isModal, setIsModal] = useState(false)

  return (
    <>
      
      <ContextApi>
        {isModal&&<Modal setIsModal={setIsModal}/>}
        <BookMark onSetIsModal={setIsModal}/>
        <AllBookMarks setIsModal={setIsModal}/>
      </ContextApi>
      
    </>
  )
}

export default App
