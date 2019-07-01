import React from 'react';
import logo from './logo.svg';
import './App.css';
import Balance from './components/balance';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Six Jars
      </header>
      <Balance/>
      <hr className="half-line"/>
      <Deposit/>
      <hr className="half-line"/>
      <Withdraw/>
      <br/>
      <br/>

      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
