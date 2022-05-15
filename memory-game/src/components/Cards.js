import { useState } from "react";
import Card from "./Card";
import CardsData from "../data/CardsData.js";

function Cards() {
  const [failed, setFailed] = useState(0);
  const [score, setScore] = useState(0);
  const [items, setItems] = useState(
    [...CardsData].sort((a, b) => 0.5 - Math.random())
  );

  function updateStuff(updateState, secondElement) {
    items[firstElement].state = updateState;
    items[secondElement].state = updateState;
    setItems([...items]);
  }

  function check(secondElement) {
    if (items[secondElement].id === items[firstElement].id) {
      updateStuff("correct", secondElement);
      setScore(score + 1);
      setFirstElement(-1);
    } else {
      updateStuff("wrong", secondElement);
      setFailed(failed + 1);
      //time out after 1 second.
      setTimeout(() => {
        updateStuff("", secondElement);
        setFirstElement(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (firstElement === -1) {
      items[id].state = "active";
      setItems([...items]);
      setFirstElement(id);
    } else if (items[id] !== items[firstElement]) {
      check(id);
    }
  }

  const [firstElement, setFirstElement] = useState(-1);

  return (
    <div className="main">
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
      {score === 8 && <h1>YOU WON!!! CONGRATULATIONS!!!</h1>}
      {score === 8 && <p>refresh to play again</p>}
      <p>score: {score}/8</p>
      <p>number of failed attempts: {failed}</p>
    </div>
  );
}

export default Cards;
