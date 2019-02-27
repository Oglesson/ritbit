import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ritSummary = () => {
  return (
    <li>
      <h2>Test title</h2>
      <h3>Test subtitle</h3>
      <p>blurb</p>
    </li>
  );
}

const ritList = () => {
  return (
      <ul>
        <ritSummary />
      </ul>
  );
}


class App extends Component {
  render() {
    return (
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
            Learn React poo
          </a>
        </header>
        <ritList />
      </div>
    );
  }
}

export default App;
