import React from 'react';
import './App.scss';
import { KYD, Main, Navbar } from './components';


const App = () => {
  return (
    <div className='singleProductPage'>
      <Navbar/>
      <Main/>
      <KYD/>      
    </div>
  )
}

export default App;