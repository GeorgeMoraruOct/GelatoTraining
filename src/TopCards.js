import "./TopCards.css";


function TopCards(props) {
    const style = {
      display: "none",
    };
    return (
      <div className= "topCard">
        <div className="info1">
          <p>Ice Cream & Gelato</p>
          <button>Explore Options</button>
        </div>
        <div className="info2">
        <img src= "/images/Group1443.png" alt="Ice Cream & Gelato"/>
          <p>Delicious Donuts</p>
          <button>Explore Options</button>
        </div>
        <div className="info3">
          <p>Family/Corporate</p>
          <button>Explore Options</button>
        </div>
      </div>
    
    )
  }
  export default TopCards;    

