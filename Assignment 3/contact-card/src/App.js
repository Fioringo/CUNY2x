import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactCard extends React.Component {
  
  render() {
    let wpn = this.props.work_phone_number;
    let phoneto = "tel:" + this.props.mobile_number;
    let workphoneto = "tel:" + this.props.work_phone_number;
    let emailmail = "mailto:" + this.props.email;
    if(wpn !== ""){
      return(
          <div className="ContactCard">
            <div className="Name"> {this.props.name} </div>
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
            <div className="Name"> {this.props.name} </div>
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

class Cards extends React.Component {
  render() {
    return(
      <div className="Cards">
        <ContactCard name="Poppy Harlow" mobile_number="(420)399-6669" work_phone_number="" email="meme-review@wsj.com"/>
        <ContactCard name="Gloria Borger" mobile_number="(420)399-6669" work_phone_number="" email="meme-review@wsj.com"/>
        <ContactCard name="Pew Die Pie" mobile_number="(399)420-1234" work_phone_number="(399)399-3999" email="meme-review@wsj.com"/>
      </div>
    );
  }
}

export default Cards;