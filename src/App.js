import React from 'react';
import logo from './logo.svg';
// import Basic2 from './components/Basic2.js';
import BasicUseEffect from './components/BasicUseEffect';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 /> */}
        <BasicUseEffect />
      </header>
    </div>
  );
}
export default App;
