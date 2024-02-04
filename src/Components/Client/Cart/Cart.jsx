import React, { useEffect, useState } from "react";
import CartCard from "./CartCard/CartCard";
import CartCoupon from "./CartCoupon/CartCoupon";
import CartPayment from "./CartPayment/CartPayment";
import { useLocation } from "react-router-dom";
import Product from "../../../Assets/Product.svg";
import axios from "axios";

import "./Cart.css";

// const userId = "12140970";
const userId= localStorage.getItem('userId');

const Cart = () => {
  const location = useLocation();
  const isCart = location.pathname === "/cart";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async (e) => {
    const products = await axios.get("http://localhost:4000/cart_data_get", {
      params: { userId: userId },
    });
    // const data = response.data;
    console.log(products.data);
    setProducts(products.data);
  };
  return (
    <>
      {isCart && (
        <div className="Cart">
          <div className="Number-Cart">
            <h1>Total 3 items in your Cart</h1>
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
                  />
                ))}
              </div>
              <div className="Coupon-Cart">
                <CartCoupon />
              </div>
            </div>
            <div className="Payment-Cart">
              <CartPayment />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
