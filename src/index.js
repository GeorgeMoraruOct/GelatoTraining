import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import TopCards from "./TopCards/TopCards";
import Card from "./Card/Card";
import Home from "./Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
