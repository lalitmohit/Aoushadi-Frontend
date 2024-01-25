import React from "react";
import OfferCard from "./OfferCard";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="Card-Conatiner">
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
    </div>
  );
};

export default Offer;
