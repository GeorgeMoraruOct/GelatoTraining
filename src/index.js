import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavBar';
import Body from './Body'
import Footer from './Footer/Footer'
import TopCards from './TopCards'

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <TopCards/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);