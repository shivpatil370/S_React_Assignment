// import { useState } from 'react'

import { useContext } from 'react';
import './App.css'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from './store/auth-context';

function App() {
  // const [count, setCount] = useState(0)
  const ctx=useContext(AuthContext);

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
