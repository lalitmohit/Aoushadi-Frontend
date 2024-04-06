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
  function func(quant, index) {
    console.log("df");
  }
  const [products, setProducts] = useState([]);
  const [result, setresult] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    const getAllProducts = async (e) => {
      const products = await axios.get(
        "https://aoushadhi.vercel.app/get_all_products"
      );
      // console.log(products.data)
      setProducts(products.data);
      if (i === "") {
        setresult(products.data);
      }
    };

    getAllProducts();
    const search_parameters = Object.keys(Object.assign({}, ...products));
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
      let a = search(products);
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
            index={index}
            key={index}
            productId={item.productId}
            userId={item.userId}
            img={Product}
            price={item.price}
            product_name={item.product_name}
            desc={item.discount}
            quant={10}
            isCart={false}
            func={func}
          />
        ))}
      </div>
    </div>
  );
};

export default Medicine;
