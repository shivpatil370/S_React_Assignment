import { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import Products from './components/Products';

function App() {
  const [data,setData]=useState([]);

  return (
    <div>
      <Forms setData={setData}/>
      <Products data={data} setData={setData}/>
    </div>
  );
}

export default App;
