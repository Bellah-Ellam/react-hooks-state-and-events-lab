import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Cart");

  function handleClick() {
    if (inCart) {
      setInCart(false);
      setButtonText("Add to Cart");
    } else {
      setInCart(true);
      setButtonText("Remove From Cart");
    }
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;