import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import Professional from './components/Professional';
import School from './components/School';
import Projects from './components/Projects';
import Personal from './components/Personal';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Title></Title>
      <Professional></Professional>
      <School></School>
      <Projects></Projects>
      <Personal></Personal>
      <Contact></Contact>
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
      </header>
    </div>
  );
}

export default App;
