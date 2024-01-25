import React, { useCallback, useRef } from "react";
import "./OfferCard.css";
import Family from "../../../Assets/Family.svg";

const OfferCard = ({ code, heading,content }) => {
  const codeRef = useRef(null);
  const copyCodeToClip = () => {
    window.navigator.clipboard.writeText(code);
  };
  return (
    <div className="OfferCard-Container">
      <h1 className="Heading-Card">
        {heading}
        <hr />
      </h1>
      <div className="Content-Conatiner">
        <div className="Para-Card">
          <p>
            {content}
          </p>
        </div>
        <div className="Image-Card">
          <img src={Family} alt="Family" />
        </div>
      </div>
      <div className="Code-Container">
        <hr />
        <div className="Hr-Copy">
          <div className="Code-Card">
            <h1 ref={codeRef}>CODE: {code}</h1>
          </div>
          <div className="Copy-Text">
            <p onClick={copyCodeToClip}>COPY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
