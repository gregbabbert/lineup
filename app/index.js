import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

// This is where app is called

ReactDOM.render(
  <App/>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);