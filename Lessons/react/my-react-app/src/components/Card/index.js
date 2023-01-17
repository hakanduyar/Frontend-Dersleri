import "./Card.css";
function Card({ title, par }) {
  return (
    <div className="Card">
      <h6>{title}</h6>
      <p>{par}</p>
      <button>Devamı</button>
    </div>
  );
}

export default Card;
