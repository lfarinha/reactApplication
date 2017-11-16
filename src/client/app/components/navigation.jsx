import React from 'react';
import {render} from 'react-dom';

export class Navigation extends React.Component {
  componentDidMount () {
    console.log("Navigation mounted");
  }
  render () {
    return (
      <div>
        <nav className="menu">
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/gallery'>Gallery</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
