import React from 'react';
import {render} from 'react-dom';
import {Router, Route, BrowserRouter} from 'react-router-dom';
import App from './app.jsx';
import Gallery from './components/gallery.jsx';

render (
  <BrowserRouter>
    <div>
    <Route path="/" component={App} />
    <Route path="/gallery" component={Gallery} />
    </div>
  </BrowserRouter>,
   document.getElementById('app')
);
