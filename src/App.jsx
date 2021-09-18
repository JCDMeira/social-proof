import "./App.css";
import React from "react";
import { StarField } from "./components/StarField";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <div className="content">
          <div className="topInfo">
            <div className="infoText">
              <h1>10,000+ of our users love our products.</h1>
              <p>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </div>
            <div className="infoStar">
              <StarField value={5}>Rated 5 Stars in Reviews</StarField>
            </div>
          </div>

          <div className="bottomInfo"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
