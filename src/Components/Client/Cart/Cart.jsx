import React from "react";
import CartCard from "./CartCard/CartCard";
import CartCoupon from "./CartCoupon/CartCoupon";
import CartPayment from "./CartPayment/CartPayment";
import { useLocation } from "react-router-dom";
import Product from "../../../Assets/Product.svg";

import "./Cart.css";

const Cart = () => {
  const location = useLocation();
  const isCart = location.pathname === "/cart";
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
                <CartCard
                  img={Product}
                  price="500"
                  name="Centaphil - The Best One"
                  desc="BY: AOUSHADHI PVT LIM."
                  quant="500 ml"
                />
                <CartCard
                  img={Product}
                  price="500"
                  name="Centaphil - The Best One"
                  desc="BY: AOUSHADHI PVT LIM."
                  quant="500 ml"
                />
              </div>
              <div className="Coupon-Caart">
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
