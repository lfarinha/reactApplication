import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';

export class About extends Component {
  componentDidMount () {
    console.log("About mounted");
  }
  render () {
    return (
      <div className="card content">
        <p>About component</p>
      </div>
    );
  }
}

export default About;
