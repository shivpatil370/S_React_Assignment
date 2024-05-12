import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import SignUp from './components/SignUp';
import Navbar from './components/navbar/Navbar';
import BodyPart from './components/bodyPart/BodyPart';
// import ComposeMail from './components/sidebar/ComposeMail';
// import ComposeMail from './components/sidebar/ComposeMail';

function App() {
  return (
    <div>
      {/* <SignUp/> */}
      {/* <ComposeMail/> */}
      <Navbar/>
      <BodyPart/>
    </div>
  );
}

export default App;
