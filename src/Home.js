import Navbar from "./NavBar";
import TopCards from "./TopCards";
import Footer from "./Footer/Footer";
import Card from "./Card";
import "./Home.css";
import Pistachio from "./images/Pistachio.png";
import Watermelon from "./images/Watermelon.png";
import Watermelon2 from "./images/Watermelon2.png";
import Strawberry from "./images/Strawberry.png";
function Home() {
  const icecream = [
    {
      name: "Pistachio Ice Cream",
      description:
        "Treat yourself to ice cream infused with smooth Bourbon sprinkled",
      price: "$2.50",
      image: Pistachio,
    },
    {
      name: "Watermelon Ice Cream",
      description:
        "Treat yourself to ice cream infused with smooth Bourbon sprinkled",
      price: "$2.50",
      image: Watermelon,
    },
    {
      name: "Strawberry Ice Cream",
      description:
        "Treat yourself to ice cream infused with smooth Bourbon sprinkled",
      price: "$2.50",
      image: Strawberry,
    },
    {
      name: "Watermelon Ice Cream",
      description:
        "Treat yourself to ice cream infused with smooth Bourbon sprinkled",
      price: "$2.50",
      image: Watermelon2,
    },
  ];
  return (
    <>
      <Navbar />
      <TopCards />
      <div className="cards">
        {icecream.map((ice) => {
          return (
            <Card
              name={ice.name}
              description={ice.description}
              price={ice.price}
              image={ice.image}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;
