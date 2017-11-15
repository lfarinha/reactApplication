import React from 'react';
import {render} from 'react-dom';

export class Body extends React.Component {
  componentDidMount () {
    console.log("Body mounted");
  }
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

export default Body;
