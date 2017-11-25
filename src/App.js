import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stepper from './Stepper'

class App extends Component {
  state = {
    name: 'xxx'
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {

    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input value={this.state.name} onChange={this.handleChange} />
        <Stepper value={this.state.name}/>
      </div>
    );
  }
}

export default App;
