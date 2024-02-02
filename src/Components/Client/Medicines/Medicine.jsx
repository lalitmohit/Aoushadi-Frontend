import React, { useState, useEffect } from "react";
import "./Medicine.css";
import { CartCard } from "../../../Import";
import Product from "../../../Assets/Product.svg";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Medicine = () => {
  const location = useLocation();
  const item = location.state;
  let i = "";
  if (item) {
    i = item;
  }
  const [products, setProducts] = useState([]);
  const [result, setresult] = useState([]);
  console.log(item, "item");
  useEffect(() => {
    console.log("useEffect");
    const getAllProducts = async (e) => {
      const products = await axios.get(
        "http://localhost:4000/get_all_products"
      );
      // console.log(products.data)
      setProducts(products.data);
      if (i === "") {
        console.log("nayamurga");
        setresult(products.data);
      }
    };

    getAllProducts();
    const search_parameters = Object.keys(Object.assign({}, ...products));
    console.log(search_parameters, "param");
    function search(data) {
      if (item) {
        return data.filter((data) =>
          search_parameters.some((parameter) =>
            data[parameter].toString().includes(item)
          )
        );
      }
    }
    if (item) {
      console.log("itemh");
      let a = search(products);
      console.log(a, "filered");
      setresult(a);
    }
  }, [item]);

  return (
    <div className="product-page">
      <div className="heading-product">
        <h1>Showing All Results</h1>
      </div>
      <div className="product-cards">
        {result.map((item, index) => (
          <CartCard
            key={index}
            productId={item.productId}
            userId={item.userId}
            img={Product}
            price={item.price}
            name={item.item_name}
            desc={item.discount}
            quant={10}
            isCart={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Medicine;
