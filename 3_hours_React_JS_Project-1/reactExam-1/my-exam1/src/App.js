import { useState } from "react";
import AllBooks from "./components/AllBooks";
import NoteBook from "./components/NoteBook";

function App() {
  const [alldatacount,setAlldatacount]=useState(0);
  const [showing,setShowing]=useState(0);
  const [getSerchtext,setGetsearchtext]=useState("");


  return (
    <div>
      <NoteBook alldatacount={alldatacount} setGetsearchtext={setGetsearchtext} showing={showing}/>
      <AllBooks setAlldatacount={setAlldatacount} getSerchtext={getSerchtext} setShowing={setShowing}/>
    </div>
  );
}

export default App;
