import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import SignUp from './components/SignUp';
import Navbar from './components/navbar/Navbar';
import BodyPart from './components/bodyPart/BodyPart';
// import ComposeMail from './components/sidebar/ComposeMail';

function App() {
  return (
    <div>
      {/* <SignUp/> */}
      <Navbar/>
      {/* <Outlet/> */}
      {/* <ComposeMail/> */}
      <BodyPart/>
    </div>
  );
}

export default App;
