import React from 'react';
import logo from './logo.svg';
import './App.css';

import StateHolder from './components/StateHolder';

//redux
import { createStore } from 'redux';
import reducer from './reducers/reducer';

const initialState = {
  message: "First test passed"
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <div className="App">
      <StateHolder msg={store.getState().message}/>
    </div>
  );
}

export default App;
