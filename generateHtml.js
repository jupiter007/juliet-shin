import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import LoadingDotsIcon from './app/components/LoadingDotsIcon';
import { StaticRouter as Router } from 'react-router-dom/server';
import StateContext from './app/StateContext';

function Shell() {
  return (
    <StateContext.Provider>
      <Router>
        <Header staticEmpty={true} />
        <div className="text-center">
          <LoadingDotsIcon />
        </div>
        <Footer />
      </Router>
    </StateContext.Provider>
  );
}

const startOfHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Juliet Shin</title>
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300,400,400i,700,700i&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Caveat|Montserrat:400,600&amp;display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/f1e0f889c4.js" crossorigin="anonymous"></script>
  
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      <div id="app">`;

const endOfHTML = `</div>
    </body>
  </html>`;

/* Set up a stream we can write to that saves to a file on our hard drive
 */
const fileName = './app/index-template.html';
const writeStream = fs.createWriteStream(fileName);

// Add the start of our HTML template to the stream
writeStream.write(startOfHTML);

/*
  Add the actual React generated HTML to the stream.
  We use ReactDomServer to generate a string
  of HTML text that a Node stream can leverage.
*/
const myStream = ReactDOMServer.renderToPipeableStream(<Shell />, {
  onAllReady() {
    myStream.pipe(writeStream);
    // End the stream with the final bit of our HTML
    writeStream.end(endOfHTML);
  },
});
