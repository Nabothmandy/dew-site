 import React from 'react'
 
 const phone = '2348012345678';
 const waLink = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

 function Footer() {
   return (
     <footer className="dw-footer">
        <div className="dw1-footer">
          <div className="dw-foot-top">
            <p className="dw-foot-logo">DEW</p>
            <div className="dw-foot-contact">
              <a href={waLink("Hi, I have a question about your skincare.")} target="_blank" rel="noreferrer">
                WhatsApp: +234 801 234 5678
              </a>
              <a href="https://instagram.com/dew.skin" target="_blank" rel="noreferrer">
                Instagram: @dew.skin
              </a>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
          <p className="dw-copy">© 2026 Dew Skincare · A concept by Mandy</p>
        </div>
      </footer>
   )
 }
 
 export default Footer