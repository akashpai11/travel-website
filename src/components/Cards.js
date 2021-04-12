import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={img1}
              text="Explore the hidden waterfall deep inside Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src={img2}
              text="Travel through the islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={img3}
              text="Set sail in the Atlantic Ocean visiting uncharted waters"
              label="Mystery"
              path="/services"
            />
            <CardItems
              src={img4}
              text="Experience Football on top of Himalayan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src={img5}
              text="Visit the classy hotels in NewYork"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
