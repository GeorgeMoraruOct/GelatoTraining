import './NavBar.css';
import logo from './images/Group1327.svg'
import accountLogo from './images/Group1349.svg'
import basketLogo from './images/Group1442.svg'
function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Gelato and Donuts"/>
        </div>
        <div className="productOptions">
          <ul>
            <li>Gelato</li>
            <li>Gelato for special needs</li>
            <li>Donuts</li>
            <li>Donuts for special needs</li>
          </ul>
        </div>
        <div className= "functionalities">
          <div className="account">
              <img src={accountLogo}/>
              <p>Account</p>
          </div>
          <div className="basket">
              <img src={basketLogo}/>
              <p>Basket</p>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
