import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setIsCart] = useState(false)

  function handleClick() {
    setIsCart(!inCart)
  }
  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
