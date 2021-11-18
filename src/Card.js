import "./Card.css";
import Pistachio from "./images/Pistachio.png";
function Card(props){
    return(
        <div className="cardContainer"> 
            <div className="imageContainer">
                <img src={props.image} alt="Ice cream image"/>
            </div>
            <div className="detailsContainer">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3>{props.price}</h3>
                <button className="buyContainer">Add to basket</button>
            </div>
        </div>
    )};
export default Card;