import React, { useEffect, useState, useContext, useRef } from 'react';
import Axios from 'axios';
import DispatchContext from '../DispatchContext';
import Page from './Page';
import { handleScroll } from '../scripts/utils';

const WordSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [words, setWords] = useState([]);
  const [regex, setRegEx] = useState('');
  const appDispatch = useContext(DispatchContext);
  const resultsContainer = useRef(null);

  useEffect(() => {
    handleScroll(resultsContainer.current);
  }, [words]);

  useEffect(() => {
    if (regex !== '') {
      async function doSearch() {
        try {
          const response = await Axios.post('/getWords', {
            searchTerm: regex,
          });
          if (response.data) {
            const numberOfMatches = response.data.length;
            appDispatch({
              type: 'flashMessage',
              value: `We found ${numberOfMatches} matches`,
            });
            setWords(response.data);
          }
        } catch (err) {
          appDispatch({ type: 'flashMessages', value: 'Something went wrong' });
          console.log(`There was an error ${err}`);
        }
      }
      doSearch();
    }
  }, [regex]);

  async function handleSubmit(e) {
    e.preventDefault();
    const reText = searchTerm.toLowerCase().replaceAll('?', '[a-z]');
    const newRegularExpression = `^${reText}$`;
    setRegEx(newRegularExpression);
  }
  return (
    <Page title="Word Search">
      <h2 className="text-center">Crossword Search</h2>
      <p className="lead text-muted text-center">
        Find the words that match your search
      </p>
      <form onSubmit={handleSubmit} className="crossword-form">
        <div className="form-group">
          <label htmlFor="regex" className="text-muted mb-1">
            <small>
              Enter the letters in the word that you know, and place the "?"
              symbol in positions you don't know
            </small>
          </label>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            id="regex"
            name="regex"
            className="form-field"
            type="text"
            placeholder="Example: s???e"
            autoComplete="off"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="py-3 mt-4 btn btn-lg btn-success btn-block"
        >
          Search
        </button>
      </form>
      {words.length > 0 && (
        <div className="results mt-4" ref={resultsContainer}>
          <h2>Results</h2>
          <p>{words.length} matches found:</p>
          <ul>
            {words.map((word, index) => {
              return <li key={index}>{word.name}</li>;
            })}
          </ul>
        </div>
      )}
      {regex !== '' && words.length === 0 && (
        <div className="results mt-4">
          <h2>No results found</h2>
        </div>
      )}
    </Page>
  );
};

export default WordSearch;
