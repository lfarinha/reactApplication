import React from 'react';
import {render} from 'react-dom';

class Navigation extends React.Component {
  componentDidMount () {
    console.log(this.props.children);
  }
  render () {
    return (
      <div>
        <nav className="menu">
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Gallery</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

module.exports = Navigation;
