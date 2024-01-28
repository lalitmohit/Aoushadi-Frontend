import React, { useState, useEffect } from "react";
import "./Medicine.css";
import { CartCard } from "../../../Import";
import Product from "../../../Assets/Product.svg";
import axios from 'axios';

const Medicine = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
  }, [] );

  const getAllProducts = async (e) => {
    const products = await axios.get('http://localhost:4000/product_data_get');
    setProducts(products.data);
  }
  
  return (
    <div className="product-page">
      <div className="heading-product">
        <h1>Showing All Results</h1>
      </div>
      <div className="product-cards">
        {products.map((item, index) => (
          <CartCard key={index}
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
