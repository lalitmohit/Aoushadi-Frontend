import React, { useEffect, useState } from "react";
import CartCard from "./CartCard/CartCard";
import CartCoupon from "./CartCoupon/CartCoupon";
import CartPayment from "./CartPayment/CartPayment";
import { useLocation } from "react-router-dom";
import Product from "../../../Assets/Product.svg";
import axios from "axios";

import "./Cart.css";
const Cart = () => {
  const [backend, setbackend] = useState([]);

  const location = useLocation();
  const isCart = location.pathname === "/cart";
  useEffect(() => {
    if (isCart) {
      const send_cart_info = () => {
        axios
          .get("http://localhost:4000/cart_data_get", {
            params: { userId: "1235" },
          })
          .then((response) => {
            setbackend(response.data);
          })
          .catch((error) => {
            console.log("error is ", error);
          });
      };
      let productId = "65b7c52d4de23857fda6f564";
      const send_product_info = async (productId) => {
        // const data = {
        //   productId:productId
        // }

        axios
          .get("http://localhost:4000/product_data_get", {
            _id: "65b7c52d4de23857fda6f564",
          })
          .then((response) => {
            const resdata = response.data;
            console.log(productId);
            console.log(resdata, "sdfgsfgdhfghfhj");
            return resdata;
            // return ""
          });
        // const data = {"userId":response.data.}
        // await axios.post('http://localhost:4000/cart_data_post',response.data);
      };

      send_cart_info();
      // console.log(backend);
      for (var i = 0; i < backend.length; i++) {
        let b = send_product_info(backend[i]["_id"]);
        console.log(b, "ooooooooooooooooooo");
      }
    }
  });

  return (
    <>
      {isCart && (
        <div className="Cart">
          <div className="Number-Cart">
            <h1>Total {backend.length} items in your Cart</h1>
          </div>
          <div className="Main-Content">
            <div className="Content-Container">
              <div className="Items-Cart">
                {backend &&
                  backend.map((item) => (
                    <CartCard
                      img={Product}
                      price={item.total_price}
                      name="Centaphil - The Best One"
                      desc="BY: AOUSHADHI PVT LIM."
                      quant="500 ml"
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
