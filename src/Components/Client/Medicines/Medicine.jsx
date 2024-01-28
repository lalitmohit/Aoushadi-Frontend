import React from "react";
import "./Medicine.css";
import { CartCard } from "../../../Import";
import Product from "../../../Assets/Product.svg";

const Medicine = () => {
  return (
    <div className="product-page">
        <div className="heading-product">
            <h1>Showing All Results</h1>
        </div>
        <div className="product-cards">
        <CartCard
        img={Product}
        price="500"
        name="Centaphil - The Best One"
        desc="BY: AOUSHADHI PVT LIM."
        quant="500 ml"
        isCart={false}
      />
      <CartCard
        img={Product}
        price="500"
        name="Centaphil - The Best One"
        desc="BY: AOUSHADHI PVT LIM."
        quant="500 ml"
        isCart={false}
      />
      <CartCard
        img={Product}
        price="500"
        name="Centaphil - The Best One"
        desc="BY: AOUSHADHI PVT LIM."
        quant="500 ml"
        isCart={false}
      />
      <CartCard
        img={Product}
        price="500"
        name="Centaphil - The Best One"
        desc="BY: AOUSHADHI PVT LIM."
        quant="500 ml"
        isCart={false}
      />
        </div>
      
    </div>
  );
};

export default Medicine;
