import { useState } from "react";
import "../App.css";
import Collection from "./collection.jsx";
import Rituals from "./rituals.jsx";
import model from "../assets/model.jpg"

const phone = "2348012345678";
const waLink = (message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;




const ingredients = [
  { num: "I", name: "Shea butter", does: "Locks in moisture" },
  { num: "II", name: "Niacinamide", does: "Controls shine" },
  { num: "III", name: "Vitamin C", does: "Brightens uneven tone" },
];

function Home() {
  

  return (
    <>
      

      <section className="dw-hero">
        <article className="dw1-hero">
          <div className="dw-hero-photo">
            <img className="dw-zoom" src={model} alt="Model with glowing skin in soft light" />
            <span className="dw-hero-tag">The Glow Ritual · No.01</span>
          </div>
          <div className="dw-hero-text">
            <p className="dw-label">Skincare for melanin-rich skin</p>
            <h1 className="dw-h1">
              <span className="dw-line"><span>Soft skin,</span></span>
              <span className="dw-line"><span>even in</span></span>
              <span className="dw-line"><span><em>the heat.</em></span></span>
            </h1>
            <p className="dw-body">
              Considered formulas for humid days, uneven tone and skin that <br /> shines by noon. Three steps. Nothing more.
            </p>
            <div className="dw-actions">
              <a href="#ritual" className="dw-btn dw-dark">Find your ritual</a>
              <a href="#shop" className="dw-btn dw-light">Shop all</a>
            </div>
          </div>
        </article>
      </section>

      <section className="dw-philo" id="story">
        <article className="dw1-philo">
          <p className="dw-label">The philosophy</p>
          <p className="dw-statement">
            Fewer products. Better ingredients. Made for the skin, the sun and the city you actually live in.
          </p>
        </article>
      </section>

      <Rituals />
      <Collection />

      
    </>
  );
}

export default Home;