import './Footer.css'

function Footer() {
    const style = {
      display: "block",
    };
    return (
      <div className="footer">
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
                  <input type="text" className="email" placeholder=""/>
                  <div class="input-group-append">
                    <button className="subscribeBtn" type="submit">Subscribe</button>  
                  </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>@2021 Gelato & Donuts</p>
        </div>
      </div>
    );
    
  }
  
  export default Footer;
  