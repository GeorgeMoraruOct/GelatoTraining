import "./NavBar.css";
import logo from "./images/Group1327.svg";
// import accountLogo from './images/Group1349.svg'
// import basketLogo from './images/Group1442.svg'
function openNav(){
  document.getElementById("menuMobile").style.width="50%"
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("close").style.display="block";
}

function closeNav(){
  document.getElementById("menuMobile").style.width="0"
  document.body.style.backgroundColor = "white";
  document.getElementById("close").style.display="none";
}

function changeNav(){
  if (window.innerWidth > 900)
    closeNav();
}

function Navbar() {
  const style={
    display:'none'
  };
  return (
    <div className="navbar" onClick={changeNav}>
      <div className="logo">
        <img src={logo} alt="Gelato and Donuts" />
      </div>
      <div className="productOptions">
        <div className="toggleMenu">
          <div className="toggleMenu1" onClick={openNav}>
            <label className="menuIcon" for="toggle">
              &#9776;
            </label>
            <p>Menu</p>
            <input type="checkbox" id="toggle" />
          </div>
        </div>
        <div id="menuMobile" className="menu">
          <div className="mobileElements">
            <button id="close" className="closeButton" onClick={closeNav} style={style} onclick="closeNav()">&times;</button>
            <h2>Menu</h2>
            <hr/>
          </div>
          <ul>
            <li className="homeButton">
              <button className="button">Home</button>
            </li>
            <li>
              <button className="button">Gelato</button>
            </li>
            <li>
              <button className="button">Gelato for special needs</button>
            </li>
            <li>
              <button className="button">Donuts</button>
            </li>
            <li>
              <button className="button">Donuts for special needs</button>
            </li>
          </ul>
          <div className="functionalitiesMenu">
            <hr/>
            <div className="accountMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="current">
                  <path d="M4,22a8,8,0,1,1,16,0H18A6,6,0,1,0,6,22Zm8-9a6,6,0,1,1,6-6A6,6,0,0,1,12,13Zm0-2A4,4,0,1,0,8,7,4,4,0,0,0,12,11Z" />
                </g>
              </svg>
              {/* <img src={accountLogo} alt="Account Button"/> */}
              <p>Account</p>
            </div>
            <hr/>
            <div className="basketMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="current">
                <path d="M12,2a6,6,0,0,1,6,6V9h4v2H20.833l-.757,9.083a1,1,0,0,1-1,.917H4.92a1,1,0,0,1-1-.917L3.166,11H2V9H6V8a6,6,0,0,1,6-6Zm6.826,9H5.173l.667,8H18.159ZM13,13v4H11V13ZM9,13v4H7V13Zm8,0v4H15V13ZM12,4A4,4,0,0,0,8.005,7.8L8,8V9h8V8a4,4,0,0,0-3.8-3.995Z" />
              </g>
              </svg>
              {/* <img src={basketLogo} alt="Basket Button"/> */}
              <p>Basket</p>
            </div>
          </div>
        </div>
      </div>
      <div className="functionalities">
        <div className="account">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="current">
              <path d="M4,22a8,8,0,1,1,16,0H18A6,6,0,1,0,6,22Zm8-9a6,6,0,1,1,6-6A6,6,0,0,1,12,13Zm0-2A4,4,0,1,0,8,7,4,4,0,0,0,12,11Z" />
            </g>
          </svg>
          {/* <img src={accountLogo} alt="Account Button"/> */}
          <p>Account</p>
        </div>
        <div className="basket">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="current">
              <path d="M12,2a6,6,0,0,1,6,6V9h4v2H20.833l-.757,9.083a1,1,0,0,1-1,.917H4.92a1,1,0,0,1-1-.917L3.166,11H2V9H6V8a6,6,0,0,1,6-6Zm6.826,9H5.173l.667,8H18.159ZM13,13v4H11V13ZM9,13v4H7V13Zm8,0v4H15V13ZM12,4A4,4,0,0,0,8.005,7.8L8,8V9h8V8a4,4,0,0,0-3.8-3.995Z" />
            </g>
          </svg>
          {/* <img src={basketLogo} alt="Basket Button"/> */}
          <p>Basket</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
