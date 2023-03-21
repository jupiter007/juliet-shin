import React from 'react';
import Page from './Page';

const About = () => {
  return (
    <Page title="About">
      <section className="about-content">
        <div className="my-photo">
          <h2>About Me</h2>
        </div>

        <div className="content-inner">
          <h2>Career</h2>
          <div className="info">
            <p>
              I have spent the last 20 years designing and building websites and
              web applications. I began my web development career as a
              client-side web developer, but spent the last six years building
              both client-side and server-side web applications.
            </p>
          </div>
          <h2>Interests</h2>
          <div className="info">
            <p>
              I have a great love for our natural resources, and most of my
              hobbies revolve around that. You can frequently find me hiking or
              bicycling in any number of the beautiful areas the Bay Area has to
              offer. I spent five years volunteering for the Gulf of the
              Farallones National Marine Sanctuary doing beach surveys for them
              and acting as a Harbor Seal docent. I also try and volunteer for,
              or donate to, other non-profits in the Bay Area that work to
              protect and share our natural resources.
            </p>
            <p>
              Other than the outdoors, I love listening to and playing music. I
              play a little guitar, piano and violin, and love to sing. I love
              to read and am always working through a couple of books at a time.
              I enjoy cooking and eating, and my cooking skills are a constantly
              evolving process. Lastly, I love spending time with my husband, my
              family and friends, and especially my niece Kiana and my sister's
              dogs Ardbeg and Tomi.
            </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#caf0f8"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,165.3C672,160,768,192,864,192C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="bottom-section">
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

export default About;
