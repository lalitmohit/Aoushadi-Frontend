import React from "react";
import "./ProductPage.css";
import sample_image from "../../../Assets/7be83f4d7db859884c987f0de107f497.png";
import option_image1 from "../../../Assets/4e0103a2727c0a67da4ce99ca4fc8fdb.png";
export default function ProductPage() {
  return (
    <div className="mt-5 md:mb-0 mb-10 md:mt-10 md:mr-12 mb-10 mr-0">
      <div className="flex-col md:bg-white min-h-96 rounded-2xl p-10">
        <div className="col md:flex">
          <div className="grid w-80">
            <div className="h-80 w-80 md:h-72 md:w-72 md:place-self-start border-2 border-gray">
              <img src={sample_image} />
            </div>
            <div className="h-24 w-72 flex justify-between"></div>
            <div></div>
          </div>
          <div className=" w-full md:px-20 mx-auto">
            <div className="top h-fit">
              <div className="medicine_name">
                Netmeds 3 Ply Face Mask with Nose Pin 100's
              </div>
              <div className="h-8"></div>
            </div>
            <div className="bottom min-h-36 py-5 text-lg">
              <div className="price flex-col ">
                <div className="flex start">
                  <div className="money">
                    <b>Rs 1000</b>
                  </div>
                  <div className="falsemoney">
                    MRP <div className="dash">1200</div>
                  </div>
                  <div className="save"> Save 20%</div>
                </div>
                <div>Inclusive of all taxes</div>
                <ul className="flex-col mt-10 list-disc">
                  <li>
                    This product cannot be returned for a refund or exchange.
                  </li>
                  <li>Mkt: Reliance Retail Limited</li>{" "}
                  <li>Country of Origin: India</li>{" "}
                  <li>
                    Delivery charges if applicable will be applied at checkout
                  </li>
                </ul>
                <div className="Quantity">Qty:</div>
              </div>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="product_details">
          <div className="heading">Product Details</div>
        </div>
        <div className="product_details">
          <div className="heading">Ratings & Reviews</div>
        </div>
      </div>
    </div>
  );
}
