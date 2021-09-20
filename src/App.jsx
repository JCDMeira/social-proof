import "./App.css";
import React from "react";
import { StarField } from "./components/StarField";
import { Card } from "./components/Card";
import photo1 from "./assets/images/image-colton.jpg";
import photo2 from "./assets/images/image-irene.jpg";
import photo3 from "./assets/images/image-anne.jpg";
import backTopDesktop from "./assets/images/bg-pattern-top-desktop.svg";
import backBottomDesktop from "./assets/images/bg-pattern-bottom-desktop.svg";
import backTopMobile from "./assets/images/bg-pattern-top-mobile.svg";
import backBottomMobile from "./assets/images/bg-pattern-bottom-mobile.svg";

function App() {
  const widthDevice = window.screen.width;
  return (
    <div className="App">
      <div className="conteiner">
        <img
          className="top-background"
          src={widthDevice > 1023 ? backTopDesktop : backTopMobile}
          alt=""
        />
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
              <StarField value={5}>Rated 5 Stars in Report Guru</StarField>
              <StarField value={5}>Rated 5 Stars in BestTech</StarField>
            </div>
          </div>

          <div className="bottomInfo">
            <Card nameValue="Colton Smith" verifiedTag={true} photo={photo1}>
              We needed the same printed design as the one we had ordered a week
              prior. Not only did they find the original order, but we also
              received it in time. Excellent!
            </Card>

            <Card nameValue="Irene Roberts " verifiedTag={true} photo={photo2}>
              Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery.
            </Card>

            <Card nameValue="Anne Wallace" verifiedTag={true} photo={photo3}>
              Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone!
            </Card>
          </div>
        </div>
        <img
          className="bottom-background"
          src={widthDevice > 600 ? backBottomDesktop : backBottomMobile}
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
