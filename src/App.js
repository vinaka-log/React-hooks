import React from 'react';
import logo from './logo.svg';
import Basic2 from './components/Basic2.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic2 />
      </header>
    </div>
  );
}
export default App;
