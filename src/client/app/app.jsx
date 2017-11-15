import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import Body from './components/body.jsx';
import Navigation from './components/navigation.jsx';
// import {About} from './about.jsx'
import Gallery from './components/gallery.jsx'

export class App extends Component {
  componentDidMount () {
    console.log("App mounted");
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

render (
  <App />,
  document.getElementById('app')
);

export default App;
