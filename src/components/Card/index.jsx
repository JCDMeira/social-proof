import React from "react";
import "./style.css";

function Card({ nameValue, verifiedTag, photo, children }) {
  return (
    <div className="card">
      <div className="head">
        <img src={photo} alt="" />
        <h1>
          {nameValue}{" "}
          <span>{verifiedTag ? "Verified Buyer" : "Not verified Buyer"}</span>
        </h1>
      </div>
      <div className="description">
        <p>" {children} "</p>
      </div>
    </div>
  );
}

export { Card };
