import "./Card.css";

const Card = ({ title, par, lesson, index }) => (
  <div className="Card">
    <h6>{title}</h6>
    <b>{index}</b>
    <p>{par}</p>
    {/* <p>{lesson}</p> */}
    {/* {lesson > 20 ? <div>İleri düzey</div> : <div>Başlangı</div>} */}
    {lesson > 20 && index == 0 && <div>İleri düzey</div>}
    <button>Devamı</button>
  </div>
);

export default Card;
