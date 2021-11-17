import Navbar from './NavBar'
import TopCards from './TopCards'
import Footer from './Footer/Footer'
import Card from './Card'
import './Home.css'
function Home(){
    const icecream=[{name: 'Pistachio Ice Cream', description: 'Treat yourself to ice cream infused with smooth Bourbon sprinkled', price: '$2.50'},
    {name: 'Watermelon Ice Cream', description: 'Treat yourself to ice cream infused with smooth Bourbon sprinkled', price: '$2.50'},
    {name: 'Strawberry Ice Cream', description: 'Treat yourself to ice cream infused with smooth Bourbon sprinkled', price: '$2.50'},
    {name: 'Watermelon Ice Cream', description: 'Treat yourself to ice cream infused with smooth Bourbon sprinkled', price: '$2.50'}]
    return(
        <>
        <Navbar/>
        <TopCards/>
        <div className="cards">
            {
                icecream.map((ice) => {
                    return <Card name={ice.name} description={ice.description}  price={ice.price}/>
                })
            }
        </div>
        <Footer/>
        </>
    )
}

export default Home;