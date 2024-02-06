import React, { useEffect, useState } from "react";
import CartCard from "./CartCard/CartCard";
import CartCoupon from "./CartCoupon/CartCoupon";
import CartPayment from "./CartPayment/CartPayment";
import { useLocation } from "react-router-dom";
import Product from "../../../Assets/Product.svg";
import axios from "axios";

import "./Cart.css";

// const userId = "12140970";
const userId = localStorage.getItem("userId");

const Cart = () => {
  const [item_number, setitem_number] = useState(0);
  function count(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        count++;
      }
    }
    return count;
  }
  const sumArray = (arr) =>
    arr.reduce(
      (sum, current) => (Number.isInteger(current) ? sum + current : sum),
      0
    );
  var quantity = [];
  const [quant, setquant] = useState(0);
  const getquantity = (quant, index) => {
    quantity[index] = quant;
    console.log(quantity, index);
    console.log(count(quantity), "jsdfkjshjkfhsdjkf", quantity);
    setitem_number(count(quantity));
    setquant(sumArray(quantity));
  };
  console.log(quantity);
  const [delivery, setdelivery] = useState(100);
  const [coupon, setcoupon] = useState(0);
  const location = useLocation();
  const isCart = location.pathname === "/cart";
  function changecoupon(value) {
    setcoupon(value);
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts(e) {
    const products = await axios.get("http://localhost:4000/cart_data_get", {
      params: { userId: userId },
    });
    // const data = response.data;
    console.log(products.data);
    setProducts(products.data);
  }
  return (
    <>
      {isCart && (
        <div className="Cart">
          <div className="Number-Cart">
            <h1>Total {item_number} items in your Cart</h1>
          </div>
          <div className="Main-Content">
            <div className="Content-Container">
              <div className="Items-Cart">
                {products.map((item, index) => (
                  <CartCard
                    key={index}
                    cartId={item.cart_id}
                    userId={item.user_id}
                    img={Product}
                    price={item.total_price}
                    name={"Centaphil - The Best One"}
                    desc={"10"}
                    quant={item.total_quantity}
                    isCart={true}
                    func={getquantity}
                    index={index}
                  />
                ))}
              </div>
              <div className="Coupon-Cart">
                <CartCoupon price={quant} changecoupon={changecoupon} />
              </div>
            </div>
            <div className="Payment-Cart">
              <CartPayment price={quant} coupon={coupon} delivery={delivery} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
