function Card({ item, id, handleClick }) {
  const itemClass = item.state ? " active " + item.state : "";
  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img className="front" src={item.picture} alt="" />
    </div>
  );
}

export default Card;
