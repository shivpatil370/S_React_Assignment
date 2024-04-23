// import { useState } from 'react'
import './App.css'
// import LoginPage from './components/LoginPage';
// import CompleteProfile from './components/Navbar/CompleteProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <LoginPage/> */}
      {/* <CompleteProfile/> */}
      <Outlet/>
    </>
  )
}

export default App
