import React from 'react';
import {render} from 'react-dom';

class About extends React.Component {
  componentDidMount () {
    console.log("About mounted");
  }
  render () {
    return (
      <div className="card content">
        <p>Leonardo Farinha</p>
      </div>
    );
  }
}

module.exports = About;
