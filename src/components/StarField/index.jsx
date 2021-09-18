import React from "react";
import "./style.css";
import star from "../../assets/images/icon-star.svg";

function StarField({ value, children }) {
  const mapV = [];

  for (let i = 0; i < value; i++) {
    mapV.push(i);
  }
  return (
    <div className="field">
      <div className="stars">
        {mapV.map((p) => {
          return <img src={star} alt="" />;
        })}
      </div>
      <div>
        <p>{children}</p>
      </div>
    </div>
  );
}

export { StarField };
