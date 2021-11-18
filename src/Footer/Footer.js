import "./Footer.css";

function Footer() {
  const style = {
    display: "block",
  };
  return (
    <div className="footer">
      <div className="newsletterTablet">
        <p className="footerTitle">Newsletter</p>
        <div class="subscribe">
          <input type="text" className="email" placeholder="" />
          <div class="input-group-append">
            <button className="subscribeBtn" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footerBody">
        <div className="info">
          <p className="footerTitle">Useful info</p>
          <p className="footerItem">Privacy Policy</p>
          <p className="footerItem">Terms & Conditions</p>
          <p className="footerItem">Cookie Policy</p>
          <p className="footerItem">FAQs</p>
        </div>
        <div className="findUs">
          <p className="footerTitle">You can find us in</p>
          <p className="footerItem">London, UK</p>
          <p className="footerItem">Bucharest, RO</p>
          <p className="footerItem">Paris, FR</p>
          <p className="footerItem">Sofia, BG</p>
        </div>
        <div className="about">
          <p className="footerTitle">About gelato & donuts</p>
          <p className="footerItem">About us</p>
          <p className="footerItem">Store locator</p>
          <p className="footerItem">Franchise</p>
          <p className="footerItem">Careers</p>
          <p className="footerItem">Contact us</p>
        </div>
        <div className="newsletter">
          <p className="footerTitle">Newsletter</p>
          <div class="subscribe">
            <input type="text" className="email" placeholder="" />
            <div class="input-group-append">
              <button className="subscribeBtn" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBodyMobile">
        <div className="info">
          <p className="footerTitle">Useful info</p>
          <svg
            className="dropDownArrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="current">
              <path d="M12.6,10.107l2.962-2.96a.559.559,0,1,0-.792-.79L11.414,9.71a.558.558,0,0,0-.016.771l3.37,3.377a.559.559,0,0,0,.792-.79Z" />
            </g>
          </svg>
        </div>
        <div className="findUs">
          <p className="footerTitle">You can find us in</p>
          <svg
            className="dropDownArrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="current">
              <path d="M12.6,10.107l2.962-2.96a.559.559,0,1,0-.792-.79L11.414,9.71a.558.558,0,0,0-.016.771l3.37,3.377a.559.559,0,0,0,.792-.79Z" />
            </g>
          </svg>
        </div>
        <div className="about">
          <p className="footerTitle">About gelato & donuts</p>
          <svg
            className="dropDownArrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="white">
              <path d="M12.6,10.107l2.962-2.96a.559.559,0,1,0-.792-.79L11.414,9.71a.558.558,0,0,0-.016.771l3.37,3.377a.559.559,0,0,0,.792-.79Z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="copyright">
        <p>@2021 Gelato & Donuts</p>
      </div>
    </div>
  );
}

export default Footer;
