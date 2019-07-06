import React from 'react';
import logo from './logo.svg';
import './App.css';
import Balance from './components/balance';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Footer from './components/Footer';
import AdvancedSetting from './components/AdvancedSetting';
import Visualization from './components/Visualization';
import VisContainer from './components/VisContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Six Jars
      </header>
      <div className="bottom-jar">
     
      <VisContainer />
      <hr className="half-line"/>
        <Deposit/>
        <Withdraw/>
        <AdvancedSetting/>
   
      <br/>
      <br/>
      
      <div className="footer-line"><hr/></div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
