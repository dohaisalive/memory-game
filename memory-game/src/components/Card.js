function Card({ item, id, handleClick }) {
  const itemClass = item.state ? " active " + item.state : "";
  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img src={item.picture} alt="" />
    </div>
  );
}

export default Card;
