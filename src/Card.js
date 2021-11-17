import "./Card.css";
function Card(props){
    return(
        <div className="cardContainer"> 
            <div className="imageContainer">
                <img src="/images/Pistachio.png" alt="No pic"/>
            </div>
            <div className="detailsContainer">
                <h3>Pistachio Ice Cream</h3>
                <p>Treat yourself to ice cream infused</p>
                <h3>$ 2.50</h3>
                <button className="buyContainer">Add to basket</button>
            </div>
        </div>
    )};
export default Card;