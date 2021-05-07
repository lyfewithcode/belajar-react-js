import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// STATE
// hanya bisa dibuat di component class, bukan di component function

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time : props.start
    }
  }

  // Lifecycle
  componentDidMount() {
    this.addInterval = setInterval( () => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    // update state setiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div> {this.state.time} Detik</div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start = "0" />
        <Timer start = "5" />
      </header>
    </div>
  );
}

export default App;
