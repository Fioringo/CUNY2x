/*
  CUNY2x
  An Exercise
  Author: Andrey Shtukenberg
  Description: Form editing main javascript file
  Notes: this is quite sloppy, but it works!
*/

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      editing: 0,
    };
    this.editNames = this.editNames.bind(this);
  }

  editNames(){
    this.setState({
      editing: 1,
    });
    // alert("Editing: " + String(this.state.editing));
  }

  cancel(){
    this.setState({
      editing: 0,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    })
  }

  save(){
    this.setState({
      editing: 0,
      firstName: document.getElementById("firstNameInput").value,
      lastName: document.getElementById("lastNameInput").value,
    });
  }

  render() {
    if(this.state.editing === 1){
      return (
        <div className="main">
          <div className="nameContainer">
            <input className="firstNameInput" id="firstNameInput" defaultValue={this.state.firstName}></input>
            <input className="lastNameInput" id="lastNameInput" defaultValue={this.state.lastName}></input>
          </div>
          <div className="buttons">
            <button className="save" onClick={() => this.save()}>Confirm</button>
            <button className="cancel" onClick={() => this.cancel()}>Cancel</button>
          </div>
        </div>
      );
    } else {
      return (
      <div className="main">
        <div className="nameContainer">
          <div className="FirstName">{this.state.firstName} </div>
          <div className="LastName"> {this.state.lastName}</div>
        </div>
        <div className="buttons">
          <button className="editBtn" onClick={() => this.editNames()}>Edit</button>
        </div>
      </div>
    );
    }
  }
}

export default App;
