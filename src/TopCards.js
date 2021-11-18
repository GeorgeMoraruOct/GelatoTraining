import "./TopCards.css";
import Gelato from "./images/Group1443.png";
import Donut from "./images/Group1444.png";
import Family from "./images/Group1445.png";

function TopCards(props) {
  const style = {
    display: "none",
  };
  return (
    <div className="topCard">
      <div className="info1">
        <p>Ice Cream & Gelato</p>
        <button className="itemButton">Explore Options</button>
      </div>
      <div className="info2">
        <p>Delicious Donuts</p>
        <button className="itemButton">Explore Options</button>
      </div>
      <div className="info3">
        <p>Family/Corporate</p>
        <button className="itemButton">Explore Options</button>
      </div>
    </div>
  );
}
export default TopCards;
