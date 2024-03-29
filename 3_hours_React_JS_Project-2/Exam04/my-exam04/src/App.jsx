// import { useState } from 'react'
import { useState } from "react";
import MedicineForm from "./components/MedicineForm.jsx";
import Modal from "./modal/Modal.jsx";
import Product from "./components/Product.jsx";
import ContextProvider from "./context-api/ContextProvider.jsx";

function App() {
  const [isTrue, setIsTrue] = useState(false)

  return (
    <ContextProvider>
       {isTrue&&<Modal onSetTrue={setIsTrue}/>}
       <MedicineForm onSetTrue={setIsTrue}/>
       <Product/>
    </ContextProvider>
  )
}

export default App
