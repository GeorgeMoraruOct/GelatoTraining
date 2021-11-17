import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from './NavBar';
import Body from './Body'
import Footer from './Footer/Footer'
import TopCards from './TopCards'
import Card from './Card'
import Home from './Home'

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);