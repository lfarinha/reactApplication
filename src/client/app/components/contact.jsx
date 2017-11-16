import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';

export class Contact extends Component {
  componentDidMount () {
    console.log("Contact mounted");
  }
  render () {
    return (
      <div className="card content">
        <p>Contact component</p>
      </div>
    );
  }
}

export default Contact;
