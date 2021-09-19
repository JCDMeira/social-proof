import React from "react";
import "./style.css";
import star from "../../assets/images/icon-star.svg";
import startOff from "../../assets/images/icon-star-off.svg";

function StarField({ value, children }) {
  const mapV = [false, false, false, false, false];

  for (let i = 0; i < value; i++) {
    mapV[i] = true;

    //mapV.push(i);
  }
  return (
    <div className="field">
      <div className="stars">
        {mapV.map((p, index) => {
          return p === true ? (
            <img key={index} src={star} alt="" />
          ) : (
            <img key={index} src={startOff} alt="" />
          );
        })}
      </div>
      <div>
        <p>{children}</p>
      </div>
    </div>
  );
}

export { StarField };
