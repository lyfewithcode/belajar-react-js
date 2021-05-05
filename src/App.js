import logo from './logo.svg';
import './App.css';

// Component dan props di react

function Biodata(props) {
  return <span> umurnya {props.age} </span>
}

function Greating(props) {
  return <h1> Halo {props.name} - <Biodata age={props.age} /> </h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greating name = "Yuda" age = "24" />
        <Greating name = "Arva" age = "20" />
      </header>
    </div>
  );
}

export default App;
