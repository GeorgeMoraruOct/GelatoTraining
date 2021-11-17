
function TopCards() {
    const style = {
      display: "none",
    };
    return (

<TopCards style={{ width: '18rem' }}>
  <TopCards.Img variant="top" src="holder.js/100px180" />
  <TopCards.Body>
    <TopCards.Title>Card Title</TopCards.Title>
    <TopCards.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </TopCards.Text>
    <button> Explore Option </button>
  </TopCards.Body>
</TopCards>)};
export default TopCards;