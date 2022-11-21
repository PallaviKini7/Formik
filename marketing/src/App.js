import './App.css';
import React from 'react'
// import Navbar from './component/navbar/navbar';
import {Route ,Routes} from 'react-router-dom'
import Home from './component/home/home';
// import Cart from './component/cart/cart'
import { Provider } from 'react-redux'



function App() {
  return (
    <div className="App">
    
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/cart' element={<Cart/>} /> */}

      </Routes>
   
      
    </div>
  );
}

export default App;
