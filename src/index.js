import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavBar';
import Body from './Body'
import Footer from './Footer/Footer'
import TopCards from './TopCards'
import Card from './Card'

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <TopCards/>
    <Card/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);