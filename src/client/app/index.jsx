import React from 'react';
import {render} from 'react-dom';
import Body from './body.jsx';
import Navigation from './navigation.jsx'

class App extends React.Component {
  componentDidMount () {
    console.log(this.props.children);
  }
  render () {
    return (
      <div>
        <Navigation />
        <Body />
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
 );
