import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="body">
            
            </div>
        </header>
      </div>
    );
  }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }
    reder() {
        return (
            <button className = "Square">
                
            </button>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <a>
            </a>
        )
    }
}

ReactDOM.render(
  <Game />
  document.getElementById('root')
);
