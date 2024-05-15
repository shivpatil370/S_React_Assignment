import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './components/SignUp';
import Navbar from './components/navbar/Navbar';
import BodyPart from './components/bodyPart/BodyPart';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
// import ComposeMail from './components/sidebar/ComposeMail';
// import ComposeMail from './components/sidebar/ComposeMail';

function App() {
  const tokens=useSelector(store=>store.auth.token)||localStorage.getItem("token");
// const [islogg,setIslogg]=useState(token);

  return (
    <div>
      {!tokens&&<SignUp/>}
      {/* <ComposeMail/> */}
      {tokens&&<Navbar/>}
      {tokens&&<BodyPart/>}
    </div>
  );
}

export default App;
