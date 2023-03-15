import React, { useEffect, useState, useContext } from 'react';
import Page from './Page';

const Home = () => {
  return (
    <Page title="Home">
      <h2 className="text-center">Welcome!</h2>
      <p className="lead text-muted text-center">Lorem ipsum.</p>
    </Page>
  );
};

export default Home;
