// import { useState } from 'react'

import { useState } from 'react';
import './App.css'
import FetchData from './components/FetchData'
import MyButton from './components/MyButton'

function App() {
  // const [count, setCount] = useState(0)
  const [fdata,setFdata]=useState(false);
  const [data,setData]=useState([]);

  return (
    <>
    <MyButton setFdata={setFdata} setData={setData}/>
      <FetchData fdata={fdata} setData={setData} data={data}/>
    </>
  )
}

export default App
