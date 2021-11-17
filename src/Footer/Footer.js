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
            </div>
            <div className="findUs">
                <p className="footerTitle">You can find us in</p>
            </div>
            <div className="about">
                <p className="footerTitle">About gelato & donuts</p>
            </div>
            <div className="newsletter">
                <p className="footerTitle">Newsletter</p>
            </div>
        </div>
        <div className="copyright">
            <p>@2021 Gelato & Donuts</p>
        </div>
      </div>
    );
    
  }
  
  export default Footer;
  