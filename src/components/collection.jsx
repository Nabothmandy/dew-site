import butter from '../assets/IMG_2147.jpeg';
import centella from '../assets/centalla.jpg';
import cleangel from '../assets/cleangel.jpg';
import vit from '../assets/vit.jpg';
import spf from '../assets/spf.jpg';

const phone = '2348012345678';
const waLink = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const bestsellers = [
  { name: "Glow Serum", price: "₦13,500", detail: "Vitamin C · 30ml", img: vit },
  { name: "Shea Cloud Cream", price: "₦11,000", detail: "Shea butter · 50ml", img: butter },
  { name: "Daily Gel Wash", price: "₦8,500", detail: "Gentle cleanse · 150ml", img: cleangel },
  { name: " SPF 50", price: "₦12,000", detail: "No white cast · 50ml", img: spf },
];

function Collection() {
  return (
    <>
    <section className="dw-shop" id="shop">
        <article className="dw1-shop">
          <div className="dw-shop-head">
            <div>
              <p className="dw-label">The collection</p>
              <h2 className="dw-h21">Most loved</h2>
            </div>
            <a href="#shop" className="dw-viewall">View all</a>
          </div>

          <div className="dw-products">
            {bestsellers.map((b) => (
              <a
                href={waLink(`Hi, I want to order the ${b.name} (${b.price})`)}
                target="_blank"
                rel="noreferrer"
                className="dw-prod"
                key={b.name}
              >
                <div className="dw-prod-photo">
                  <img src={b.img} alt={b.name} />
                </div>
                <div className="dw-prod-row">
                  <span className="dw-prod-name">{b.name}</span>
                  <span className="dw-price">{b.price}</span>
                </div>
                <p className="dw-label">{b.detail}</p>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="dw-ingr" id="ingredients">
        <article className="dw1-ingr">
          <div className="dw-ingr-title">
            <p className="dw-label">Ingredients</p>
            <h2 className="dw-h22">Short lists.<br />Clear reasons.</h2>
          </div>
          <div className="dw-ingr-list">
            <div className="dw-ingr-row">
              <span className="dw-num">I</span>
              <span className="dw-ingr-name">Shea butter</span>
              <span className="dw-ingr-does">Locks in moisture</span>
            </div>
            <div className="dw-ingr-row">
              <span className="dw-num">II</span>
              <span className="dw-ingr-name">Niacinamide</span>
              <span className="dw-ingr-does">Controls shine</span>
            </div>
            <div className="dw-ingr-row">
              <span className="dw-num">III</span>
              <span className="dw-ingr-name">Vitamin C</span>
              <span className="dw-ingr-does">Brightens uneven tone</span>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Collection