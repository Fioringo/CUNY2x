import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Decrementer extends Component {

  counter = 0;

  constructor(props){
    super(props);
    this.state = {
      state: this.state,
    }
  }

  decrement(){
    if(this.counter >= this.props.number){
      alert("Can't go below 0!");
    } else {
      this.counter += 1;
      this.setState({state: this.state});
    }
  }

  render() {
    return(
        <div className="main">
          <div className="number">{String(this.props.number - this.counter)}</div>
          <button className="decrementerBtn" onClick={() => this.decrement()}>Subtract 1</button>
        </div>
      )
  };
}

Decrementer.propTypes = {
  number: PropTypes.number,
}

export default Decrementer;
