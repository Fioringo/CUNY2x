/*
  CUNY2x
  Assignment 4
  Author: Andrey Shtukenberg
  Contact Cards App.js file, with all of the required functions.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class ContactCard extends Component {

  render() {
    let wpn = this.props.work_phone_number;
    let phoneto = "tel:" + this.props.mobile_number;
    let workphoneto = "tel:" + this.props.work_phone_number;
    let emailmail = "mailto:" + this.props.email;
    if(wpn !== ""){
      return(
          <div className="ContactCard">
            <div className="Name"><strong> {this.props.name} </strong></div>
            <a
            href={phoneto}
            > {this.props.mobile_number} </a><br/>
            <a
            href={workphoneto}
            > {this.props.work_phone_number} </a><br/>
            <a
            href={emailmail}
            > {this.props.email} </a>
          </div>
        );
    } else {
      return(
          <div className="ContactCard">
            <div className="Centerer"> </div>
            <div className="Name"><strong> {this.props.name}</strong> </div>
            <a
            href={phoneto}
            > {this.props.mobile_number} </a><br/>
            <a
            href={workphoneto}
            > {this.props.email} </a>
          </div>
      );
    }
  }
}

ContactCard.PropTypes = {
  work_phone_number: PropTypes.string,
  mobile_number: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

class Cards extends Component {
  render() {
    return(
      <div className="Cards">
          <ContactCard name="Poppy Harlow" mobile_number="(202)555-0191" work_phone_number="(501)555-0155" email="meme-review@wsj.com"/>
          <ContactCard name="Gloria Borger" mobile_number="(420)399-6669" work_phone_number="" email="meme-review@wsj.com"/>
          <ContactCard name="Pew Die Pie" mobile_number="(399)420-1234" work_phone_number="(399)399-3999" email="meme-review@wsj.com"/>
      </div>
    );
  }
}

export default Cards;