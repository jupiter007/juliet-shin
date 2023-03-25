import React from 'react';
import Page from './Page';

const Home = () => {
  return (
    <Page title="Home">
      <section className="home-section">
        <div className="heading-wrapper">
          <h1>Juliet Shin</h1>
          <h2>Frontend Software Engineer</h2>
          <ul className="icons">
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/julietshin1/"
                target="_blank"
                rel="noopener"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/jupiter007/juliet-shin"
                rel="noopener"
                target="_blank"
                title="github"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00b4d8"
            fillOpacity="1"
            d="M0,96L48,96C96,96,192,96,288,122.7C384,149,480,203,576,186.7C672,171,768,85,864,64C960,43,1056,85,1152,96C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="home-section">
        <div className="content-wrap divider">
          <h2>Skills</h2>
          <p>
            I've been developing front-end and back-end applications with
            JavaScript using technologies such as NodeJS, React, and Express.
          </p>
          <ul className="icons">
            <li className="github">
              <i className="fa-brands fa-square-js"></i>
            </li>
            <li className="linkedin">
              <i className="fa-brands fa-react"></i>
            </li>
            <li className="linkedin">
              <i className="fa-brands fa-node-js"></i>
            </li>
          </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ade8f4"
            fillOpacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,149.3C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="home-section">
        <div className="content-wrap divider">
          <h2>Featured Projects</h2>
          <p>
            View selected projects below. More detailed information about my
            experience and skills can be found at{' '}
            <a
              href="https://www.linkedin.com/in/julietshin1/"
              target="_blank"
              rel="noopener"
            >
              linkedin
            </a>
            .
          </p>

          <section className="project-item portfolio-section tri-view">
            <div className="portfolio-item reveal">
              <h3>Xoom</h3>
              <p className="description">
                Built and maintained the remittance app for Xoom’s online money
                transfer using Node.js, Express framework and React on virtual
                environments in Docker containers. The app was created around an
                MVC architecture, using controllers to request data from the
                orchestration layer, data models to structure the data and view.
              </p>
              <p>
                {' '}
                The flow consisted of pages to select countries, enter amounts,
                add and select recipients, and select and enter info on payment
                and disbursement types.{' '}
              </p>
              <div className="cards">
                <div className="text-card">
                  <div>
                    <img
                      src="/public/select-country-mobile.png"
                      className="small-img"
                      alt="Select country page"
                    />
                  </div>
                </div>
                <div className="text-card">
                  <div>
                    <img
                      src="/public/send-money-mobile.png"
                      className="small-img"
                      alt="Amount page"
                    />
                  </div>
                </div>
                <div className="text-card">
                  <div>
                    <img
                      src="/public/cash-pickup-mobile.png"
                      className="small-img"
                      alt="Cash pickup page"
                    />
                  </div>
                </div>
              </div>
              <div className="project-button">
                <a href="https://www.xoom.com" target="_blank" rel="noopener">
                  Xoom.com
                </a>
              </div>
            </div>
            <div className="portfolio-item reveal">
              <div className="paypal-project">
                <h3>PayPal Checkout</h3>
                <p className="description">
                  I built multiple features for the PayPal Checkout flow with a
                  focus on PayPal Credit and Pay Later features.
                </p>
                <div className="checkout-page-mobile">
                  <img
                    src="/public/paypal-review-page-mobile.png"
                    alt="PayPal checkout page"
                  />
                </div>
              </div>
              <div className="project-button">
                <a href="https://www.paypal.com" target="_blank" rel="noopener">
                  PayPal.com
                </a>
              </div>
            </div>
          </section>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#caf0f8"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,165.3C672,160,768,192,864,192C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="home-section bottom-section">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#caf0f8"
            fillOpacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,149.3C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </Page>
  );
};

export default Home;
