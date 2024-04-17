import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';

function App() {
  return (
    <PrimeReactProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button icon="pi pi-user" severity="info">Sign-In</Button>
      </header>
      
    </div>
    </PrimeReactProvider>
  );
}

export default App;
