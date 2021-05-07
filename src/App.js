import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Event: Menggunakan function component

function Clicker() {
  function handleClick(e) {
    alert('Berhasil mengklik!')
    e.preventDeafault()
  }

  return (
    <a href="#" onClick = {handleClick}> Klik di sini!</a>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clicker />
      </header>
    </div>
  );
}

export default App;
