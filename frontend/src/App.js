import React, { Component } from 'react';
import './App.css';
import style from '../src/test.scss'
console.log('test');
console.log(style)
class App extends Component {
  render() {
    return (
      <div className={style.test}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        Front End
      </div>
    );
  }
}

export default App;
