import React from 'react';
import {render} from 'react-dom';
import {Router, Route, BrowserRouter} from 'react-router-dom';
import App from './app.jsx';
import Body from './components/body.jsx';
import Gallery from './components/gallery.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';

render (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Body} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>,
   document.getElementById('app')
);
