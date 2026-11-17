import { useState } from 'react'
import butter from '../assets/IMG_2147.jpeg';
import serum from '../assets/IMG_2150.jpeg';
import cleanser from '../assets/IMG_2151.jpeg';
import yes from '../assets/IMG_2149.jpeg';
import face from '../assets/facewash.jpg';
import lotion from '../assets/lotion.jpg';
import centella from '../assets/centalla.jpg';
import balm from '../assets/balm.jpg';
import gel from '../assets/gel.jpg';
import nia from '../assets/niacinamide.jpg';
import vitamin from '../assets/vitaminc.jpg';
import cleangel from '../assets/cleangel.jpg';



const rituals = [
  {
    type: "Oily",
    note: "Shiny by noon? Keep oil down without drying the skin out.",
    total: "₦31,000",
    steps: [
      { num: "I", step: "Cleanse", name: "Daily Gel Wash", price: "₦8,500", why: "Lifts oil and sweat without leaving skin tight.", img: cleangel },
      { num: "II", step: "Treat", name: "Clear Serum", price: "₦12,000", why: "Niacinamide to control shine and refine the look of pores.", img: nia },
      { num: "III", step: "Moisturise", name: "Water Gel", price: "₦10,500", why: "Weightless hydration that disappears into the skin.", img: gel },
    ],
  },
  {
    type: "Dry",
    note: "Tight or ashy? A ritual built around deep, lasting moisture.",
    total: "₦31,500",
    steps: [
      { num: "I", step: "Cleanse", name: "Cream Wash", price: "₦8,000", why: "A soft, milky cleanser that leaves skin comfortable.", img: yes },
      { num: "II", step: "Treat", name: "Hydra Serum", price: "₦12,500", why: "Hyaluronic acid to draw water into thirsty skin.", img: serum },
      { num: "III", step: "Moisturise", name: "Shea Cloud Cream", price: "₦11,000", why: "Rich shea butter that seals everything in.", img: butter },
    ],
  },
  {
    type: "Combination",
    note: "Oily T-zone, dry cheeks? A ritual that balances both.",
    total: "₦31,500",
    steps: [
      { num: "I", step: "Cleanse", name: "Soft Foam Wash", price: "₦8,000", why: "Clears the T-zone without stripping the cheeks.", img: face },
      { num: "II", step: "Treat", name: "Glow Serum", price: "₦13,500", why: "Vitamin C to even out tone and fade dark marks.", img: vitamin },
      { num: "III", step: "Moisturise", name: "Light Lotion", price: "₦10,000", why: "Just enough moisture, never heavy.", img: lotion },
    ],
  },
  {
    type: "Sensitive",
    note: "Reacts easily? A ritual that keeps everything calm.",
    total: "₦32,000",
    steps: [
      { num: "I", step: "Cleanse", name: "Calm Milk", price: "₦8,500", why: "Fragrance-free and exceptionally gentle.", img: cleanser },
      { num: "II", step: "Treat", name: "Soothe Serum", price: "₦12,000", why: "Centella to quiet redness and irritation.", img: centella },
      { num: "III", step: "Moisturise", name: "Barrier Balm", price: "₦11,500", why: "Restores the skin barrier overnight.", img: balm },
    ],
  },
];

const phone = '2348012345678';
const waLink = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

function Rituals() {
    const [pick, setPick] = useState(0);
    const ritual = rituals[pick];
  return (
    <>
      <section className="dw-ritual" id="ritual">
        <article className="dw1-ritual">
          <div className="dw-ritual-head">
            <div className="dw-ritual-title">
              <p className="dw-label1">Your ritual</p>
              <h2 className="dw-h2">How does your skin feel today?</h2>
            </div>
            <div className="dw-tabs">
                {rituals.map((item, index) => (
                    <button className={`dw-tab ${pick === index ?  "on" : ""}`} 
                    key={item.type}
                    onClick={() => setPick(index)}
                    >{item.type}</button>
                ))}
              
            </div>
          </div>

          <p className="dw-note">{ritual.note}</p>

          <div className="dw-steps">
            {ritual.steps.map((step) => (
              <div className="dw-step" key={step.num}>
                <div className="dw-step-top">
                  <span className="dw-num">{step.num}</span>
                  <span className="dw-label2">{step.step}</span>
                </div>
                <div className="dw-step-photo">
                  <img src={step.img} alt={step.name} />
                </div>
                <div className="dw-step-row">
                  <p className="dw-step-name">{step.name}</p>
                  <span className="dw-price">{step.price}</span>
                </div>
                <p className="dw-step-why">{step.why}</p>
              </div>
            ))}
          </div>

          <div className="dw-ritual-foot">
            <p className="dw-total">The complete ritual <span>{ritual.total}</span></p>
            <a href={waLink(`Hi, I'd like the ${ritual.type} skin ritual (${ritual.total})`)} target="_blank" rel="noreferrer" className="dw-btn dw-cream">
              Order this ritual on WhatsApp
            </a>
          </div>
        </article>
      </section>
    </>
  )
}

export default Rituals