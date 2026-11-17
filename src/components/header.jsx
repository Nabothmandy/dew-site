import React from 'react'

function Header() {
  return (
    <>
      <section className="dw-topbar">
        <article className="dw1-topbar">
          <p>Complimentary delivery on all orders</p>
        </article>
      </section>

      <header className="dw-header">
        <div className="dw1-header">
          <nav className="dw-nav">
            <a href="#shop">Shop</a>
            <a href="#ritual">Rituals</a>
            <a href="#ingredients">Ingredients</a>
          </nav>
          <a href="/" className="dw-logo">DEW</a>
          <div className="dw-right">
            <a href="#story" className="dw-hide">Our  story</a>
            <a href="#shop">Bag (0)</a>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header