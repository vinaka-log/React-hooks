import React from 'react';
import logo from './logo.svg';
import Basic1 from './components/Basic1.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic1 name="Hooks"/>
        <Basic1 name="vinaka"/>
      </header>
    </div>
  );
}
export default App;
