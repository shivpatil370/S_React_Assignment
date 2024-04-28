// import { useState } from 'react'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './App.css'
import { useSelector } from 'react-redux';

function App() {
  // const [count, setCount] = useState(0);

  const toggle=useSelector(store=>store.cart.toggle);

  return (
    <>
      <Layout>
      {toggle&&<Cart />}
      <Products />
    </Layout>
    </>
  )
}

export default App
