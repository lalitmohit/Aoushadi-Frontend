import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import "./CartCard.css";
import axios from "axios";

const CartCard = ({
  index,
  img,
  price,
  name,
  desc,
  quant,
  isCart,
  productId,
  func,
}) => {
  const [added, seadded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const userId = localStorage.getItem("userId");
  const cartId = "7848374";

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => setQuantity(Math.max(0, quantity - 1));

  const deleteCard = () => setQuantity(0);

  useEffect(() => {
    if (quantity === 0) {
      axios
        .delete("http://localhost:4000/cart_data_del", {
          params: { cart_id: cartId, user_id: userId },
        })
        .then((response) => console.log(response.data));
    }
  }, [quantity]);

  const send_product_info = async () => {
    // const data = {
    //   productId:productId
    // }

    axios
      .get("http://localhost:4000/product_data_get", {
        params: { productId: productId },
      })
      .then((response) => {
        const data = response.data;
        const responseData = {
          user_id: userId,
          cart_id: cartId,
          product_id: productId,
          total_quantity: quantity,
          price: data[0].price,
          total_price: data[0].price,
          total_discount: 0
        };
        // console.log(productId)
        // return ""
        axios.post("http://localhost:4000/cart_data_post", responseData);
        return "";
      });
    // const data = {"userId":response.data.}
    // await axios.post('http://localhost:4000/cart_data_post',response.data);
  };
  func(quantity * price, index);

  // console.log(quantity);
  // useState(() => {
  //   func(quantity);
  //   console.log(quantity, "gbjknjnuinkjnnjiunjknui");
  // }, [quantity]);
  return (
    <>
      {quantity > 0 && (
        <div className="Cart-Card">
          <div className="Image-Card">
            <img src={img} alt="Product" />
          </div>
          <div className="content-Card">
            <div className="top-ka-Card">
              <h1>{name}</h1>
              {isCart && (
                <div className="button" onClick={deleteCard}>
                  <MdDelete />
                </div>
              )}
            </div>
            <div className="Para-Card">
              <p className="by-Card">{desc}</p>
              <p className="quant-Card">{quant}</p>
            </div>
            <div className="bottom-Card">
              <h1>Rs. {price * quantity}</h1>
              {isCart ? (
                <div className="plmn-Card">
                  <div className="minus" onClick={decreaseQuantity}>
                    -
                  </div>
                  <div>Qty: {quantity}</div>
                  <div className="minus" onClick={increaseQuantity}>
                    +
                  </div>
                </div>
              ) : (
                <div className="add-cart">
                  <div onClick={send_product_info}>Add to Cart</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartCard;
