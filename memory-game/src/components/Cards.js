import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [failed, setFailed] = useState(0);
  const [score, setScore] = useState(0);

  const [items, setItems] = useState(
    [
      { id: 0, picture: "/pics/cow.png", state: "" },
      { id: 0, picture: "/pics/cow.png", state: "" },

      { id: 1, picture: "/pics/crocodile.png", state: "" },
      { id: 1, picture: "/pics/crocodile.png", state: "" },

      { id: 2, picture: "/pics/elephant.png", state: "" },
      { id: 2, picture: "/pics/elephant.png", state: "" },

      { id: 3, picture: "/pics/flamingo.png", state: "" },
      { id: 3, picture: "/pics/flamingo.png", state: "" },

      { id: 4, picture: "/pics/fox.png", state: "" },
      { id: 4, picture: "/pics/fox.png", state: "" },

      { id: 5, picture: "/pics/panda-bear.png", state: "" },
      { id: 5, picture: "/pics/panda-bear.png", state: "" },

      { id: 6, picture: "/pics/sheep.png", state: "" },
      { id: 6, picture: "/pics/sheep.png", state: "" },

      { id: 7, picture: "/pics/squirrel.png", state: "" },
      { id: 7, picture: "/pics/squirrel.png", state: "" },
    ].sort(() => Math.random() - 0.5)
  );

  function check(current) {
    if (items[current].id === items[firstElement].id) {
      items[current].state = "correct";
      items[firstElement].state = "correct";
      setScore(score + 1);
      setItems([...items]);
      setFirstElement(-1);
      if (score === 8) {
        //congrats!!
      }
    } else {
      items[current].state = "wrong";
      items[firstElement].state = "wrong";
      setFailed(failed + 1);
      setItems([...items]);
      setTimeout(() => {
        items[current].state = "";
        items[firstElement].state = "";
        setItems([...items]);
        setFirstElement(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (firstElement === -1) {
      items[id].state = "active";
      setItems([...items]);
      setFirstElement(id);
    } else {
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
      <p>score: {score}</p>
      <p>number of failed attempts: {failed}</p>
    </div>
  );
}

export default Cards;
