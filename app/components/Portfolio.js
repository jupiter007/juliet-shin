import React from 'react';
import ModalWindow from './ModalWindow';
import {
  adImages,
  websiteImages,
  emailImages,
  postcardImages,
} from './includes/constants';

function Portfolio() {
  return (
    <>
      <div id="gallery">
        <h2 id="ads">Ads</h2>
        <section>
          <ModalWindow images={adImages} />
        </section>
        <h2 id="websites">Websites</h2>
        <section>
          <ModalWindow images={websiteImages} />
        </section>
        <h2 id="emails">HTML Emails</h2>
        <section>
          <ModalWindow images={emailImages} />
        </section>

        <h2 id="postcards">Postcards</h2>
        <section>
          <ModalWindow images={postcardImages} />
        </section>
      </div>
    </>
  );
}

export default Portfolio;
