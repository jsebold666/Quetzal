import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/index.jsx';
import Landing from './windows/home-page/index.jsx'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
