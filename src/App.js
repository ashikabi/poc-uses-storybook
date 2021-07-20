import logo from './logo.svg';
import './App.css';
import {Button} from './stories/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button 
          label='SB Button' 
          size='large'
          rounded
          primary
          />
          <br />
        <a
          className="App-link"
          href="https://storybook.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn storybook
        </a>
      </header>
    </div>
  );
}

export default App;
