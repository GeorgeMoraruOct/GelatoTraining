import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavBar';
import Body from './Body'

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
  </React.StrictMode>,
  document.getElementById('root')
);