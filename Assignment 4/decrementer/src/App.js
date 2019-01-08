/*
  CUNY2x
  Assignment 4
  Author: Andrey Shtukenberg
  Decrementer App.js file, with all of the required functionality.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {hotkeys} from 'react-keyboard-shortcuts';
// import {hotkeys_display} from 'react-keyboard-shortcuts';
import './App.css';

class Decrementer extends Component {

  counter = 0;
  constructor(props){
    super(props);
    this.state = {
      state: this.props,
      resetState: "noResetBtn",
    }
    this.reset = this.reset.bind(this);
  }

  decrement(){
    if(this.counter >= this.props.number){
      alert("Can't go below 0!");
    } else {
      this.counter += 1;
      this.setState({
        state: this.state,
        resetState: "resetBtn",
      });
    }
  }

  reset(){
    this.counter = 0;
    this.setState({
      state: this.state,
      resetState: "noResetBtn",
    });
  }

  render() {
    return(
        <div className="main">
          <div className="number">{String(this.props.number - this.counter)}</div>
          <button className="decrementerBtn" onClick={() => this.decrement()}>Subtract 1</button>
          <button className={String(this.state.resetState)} onClick={() => this.reset()}> Reset </button>
        </div>
      )
  };
}

Decrementer.propTypes = {
  number: PropTypes.number,
}

export default Decrementer;
