import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./CartCard.css"

const CartCard = ({ img, price, name, desc, quant }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const deleteCard = () => {
    setQuantity(0);
  };

  return (
    <>
      {quantity > 0 && (
        <div className="Cart-Card">
          <div className="Image-Card">
            <img src={img} alt="Product" />
          </div>
          <div className="content-Card">
            <div className="top-Card">
              <h1>{name}</h1>
              <button onClick={deleteCard}>
                <MdDelete />
              </button>
            </div>
            <div className="Para-Card">
              <p className="by-Card">{desc}</p>
              <p className="quant-Card">{quant}</p>
            </div>
            <div className="bottom-Card">
              <h1>Rs. {price * quantity}</h1>
              <div className="plmn-Card">
                <button className="minus" onClick={decreaseQuantity}>-</button>
                <button>Qty: {quantity}</button>
                <button className="minus" onClick={increaseQuantity}>+</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartCard;
