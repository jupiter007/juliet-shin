import React, { useEffect } from 'react';

function RecentPortfolio() {
  return (
    <div className="portfolio-container">
      <section className="portfolio-section">
        <h1>Portfolio</h1>
        <p className="portfolio-intro">
          My focus in the last ten years consisted of building and maintaining
          the Remittance App server-side node app for Xoom’s online money
          transfer using Node.js, Express framework and React on virtual
          environments in Docker containers. The Remittance App was created
          around an MVC architecture, using controllers to request data from the
          orchestration layer, data models to structure the data and view models
          to render the web pages.
        </p>
        <p className="portfolio-intro">
          In the last year, I worked on PayPal Credit and Pay Later features on
          PayPal's Checkout team.
        </p>
      </section>

      <section className="portfolio-section single-view">
        <div className="portfolio-item reveal home-page-desktop">
          <div className="header-title">
            <h2>Xoom's send money flow</h2>
            <small>
              <a href="https://www.xoom.com">https://www.xoom.com</a>
            </small>
          </div>

          <div className="home-page-mobile">
            <img src="/public/home-mobile.png" />
          </div>
        </div>
      </section>
      <section className="portfolio-section tri-view">
        <div className="portfolio-item reveal">
          <p className="description">
            Xoom's send money flow consisted of pages to select countries, enter
            amounts, add and select recipients, select and enter info on payment
            and disbursement types.
          </p>
          <div className="cards">
            <div className="text-card">
              <div>
                <img
                  src="/public/select-country-mobile.png"
                  className="small-img"
                />
              </div>
            </div>
            <div className="text-card">
              <div>
                <img
                  src="/public/send-money-mobile.png"
                  className="small-img"
                />
              </div>
            </div>
            <div className="text-card">
              <div>
                <img
                  src="/public/cash-pickup-mobile.png"
                  className="small-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-section checkout-view">
        <div className="portfolio-item reveal">
          <div className="header-title">
            <h2>PayPal Checkout</h2>
            <small>
              <a href="https://www.paypal.com">https://www.paypal.com</a>
            </small>
          </div>
          <p className="description">
            I worked multiple features for the PayPal Checkout flow, but my
            primary focus was on PayPal Credit and Pay Later features.
          </p>
          <div className="checkout-page-mobile">
            <img src="/public/paypal-review-page-mobile.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecentPortfolio;
