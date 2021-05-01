import logo from './logo.svg';
import './App.css';

// Component dan props di react

function Greating(props) {
  return <h1> Halo {props.name}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greating name = "Yuda"/>
        <Greating name = "Arva"/>
      </header>
    </div>
  );
}

export default App;
