import React from 'react';
import ModalWindow from './ModalWindow';
import {
  adImages,
  websiteImages,
  emailImages,
  postcardImages,
} from './includes/constants';

function Archives() {
  return (
    <section className="archives-section">
      <div id="gallery">
        <h2>Archives</h2>
        <p>
          Prior to my work at Xoom and PayPal, I designed and built websites for
          Forward Funds, Forward Management, Sierra Club Funds and Reflow. I
          also built websites for Equal Rights Org. and Children's Learning
          Center.
        </p>
        <p>Click icons below to view screenshots.</p>
        <h2 id="websites">Websites</h2>
        <div>
          <ModalWindow images={websiteImages} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,149.3C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Archives;
