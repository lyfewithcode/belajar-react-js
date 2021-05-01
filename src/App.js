import logo from './logo.svg';
import './App.css';

// Component dan props di react

function Greating() {
  return <h1> Halo Nama</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greating />
      </header>
    </div>
  );
}

export default App;
