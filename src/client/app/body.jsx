import React from 'react';
import {render} from 'react-dom';

class Body extends React.Component {
  render () {
    var style = {
      'display':'inline-block',
      'background-color': 'yellow',
      'height':200,
      'width': 600
    }
    return (
        <div className="card content">
        <section className="pageBody">
          <p>this is the body of the page</p>
        </section>
        </div>
    );
  }
}

module.exports = Body;

//render(<App/>, document.getElementById('app'));
