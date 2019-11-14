import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/index.jsx';
import Landing from './windows/home-page/index.jsx';
import Login from './windows/authentication/login/index.jsx';
import Register from './windows/authentication/register/index.jsx';
import Student from './windows/profiles/studente-profile/index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Login />
      <Register />
      <Student />
    </div>
  );
}

export default App;
