import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Handle event: Menggunakan class component

class Toggle extends Component {
  constructor(props) {
    super(props)
      this.state = {
        toggleStatus: true
      }
      
      this.hadleClick = this.hadleClick.bind(this)
  }

  hadleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.hadleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>Kondisi sekarang {this.state.toggleStatus ? 'nyala' : 'mati'}</p>
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle />
      </header>
    </div>
  );
}

export default App;
