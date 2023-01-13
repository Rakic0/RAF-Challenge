import Card from "./Card";
import cardData from "../data/cards.json";

const Cards = () => {
  return (
    <div className="cards">
      {cardData.map((item, i) => (
        <Card
          i={i}
          img={item.img}
          title={item.title}
          key={item.id}
          style={{ zIndex: i }}
          recyc={item.recyc}
          status={i === 0 ? "active" : "unknown"}
        />
      ))}
    </div>
  );
};

export default Cards;
