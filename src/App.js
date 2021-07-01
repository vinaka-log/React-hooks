import React from 'react';
import logo from './logo.svg';
import './App.css';

// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext';
import B from './components/B';
import BasicReducer from './components/BasicReducer';
import {useReducer, useState, useCallback} from 'react'
import CompB from './components/CompB';
import Memo from './components/Memo';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';

const initialState  = 0
const reducer = (currentState, action) => {
    switch(action){
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        defalult:
            return currentState
    }
}

function App() {
  const [count1, setcount1] = useState(0)
  const [count2, setcount2] = useState(0)

  const AddCount1 =useCallback(() => {
      setcount1(preCount1 => preCount1 + 1)
  },[count1])
  const AddCount2 =useCallback(() => {
      setcount2(preCount2 => preCount2 + 1)
  },[count2])
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 />
          <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <B /> */}
          {/* <BasicReducer /> */}
          {/* Count {count}
          <CompB /> */}
          {/* <Memo /> */}
          <CountDisplay name ="count1" count={count1}/>
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>
          {/* <Memo /> */}
          <CountDisplay name = "count2" count={count2}/>
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
        </header>
      </div>
    </AppContext.Provider>
  );
}
export default App;
