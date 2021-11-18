import "./Title.css";

function Title() {
  const style = {
    display: "none",
  };
  return (
    <div className="title">
      <div className="IceCream">
        <p>Top Selling Ice Cream & Gelato</p>
      </div>
      <div className="Explore">
        <p className="TitleTablet">All</p>
        <p className="TitleDesktop">Explore All</p>
        <svg
          className="ArrowSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="current">
            <path d="M12,11V8l4,4-4,4V13H8V11Zm0-9A10,10,0,1,1,2,12,10,10,0,0,1,12,2Zm0,18a8,8,0,1,0-8-8A8,8,0,0,0,12,20Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Title;
