import { useState } from 'react'
import BookMark from "./components/BookMark"
import Modal from "./modal/Modal";
import AllBookMarks from './components/AllBookMarks';

// import './App.css'

function App() {
  const [isModal, setIsModal] = useState(false)

  return (
    <>
     {isModal&&<Modal onSetModal={setIsModal}/>}
     <BookMark onSetModal={setIsModal}/>
     <AllBookMarks onSetModal={setIsModal}/>
    </>
  )
}

export default App
