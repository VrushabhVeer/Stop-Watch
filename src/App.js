import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>STOP WATCH</h2>
      </header>
      <Stopwatch></Stopwatch>
    </div>
  );
}

export default App;
