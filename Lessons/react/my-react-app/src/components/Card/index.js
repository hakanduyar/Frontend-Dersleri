import "./Card.css";
function Card(props) {
  return (
    <div className="Card">
      <h6>{props.title}</h6>
      <p>{props.p}</p>
      <button>Devamı</button>
    </div>
  );
}

export default Card;
