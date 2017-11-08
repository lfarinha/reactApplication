import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    var navStyle = {
      'nav': 'text-align: center'
    }
    var ulStyle = {
      'border':'solid darkblue',
      'background-color': 'darkblue',
      'list-style-type': 'none',
      'margin': 0,
      'padding': 0,
      'overflow': 'hidden'
    }
    var liStyle = {
          'display': 'inline'
    }
    var aStyle = {
          'display': 'inline-block',
          'color': 'white',
          'font-weight': 'bold',
          'font-size': 30,
          'text-align': 'center',
          'padding': '14px 16px',
          'text-decoration': 'none'
    }
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

render(<App/>, document.getElementById('app'));
