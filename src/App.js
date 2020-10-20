import React from 'react';
import './App.css';
// import axios from 'axios';
import QueryApi from './components/QueryApi';
import Hello from './components/Hello';
import Count from './components/Count'


function App() {
  return (
    <div className="App">
      <h1> Lets get a loading animation going! </h1>
      <QueryApi />
      <Count />
    </div>
  );
}

export default App;
