import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import SignUp from './components/SignUp';
// import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <SignUp/> */}
      {/* <Navbar/> */}
      <Outlet/>
    </div>
  );
}

export default App;
