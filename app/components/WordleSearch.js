import React, { useEffect, useState, useContext, useRef } from 'react';
import Axios from 'axios';
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import Page from './Page';
import { handleScroll } from '../scripts/utils';

function WordleSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [words, setWords] = useState([]);
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const resultsContainer = useRef(null);

  useEffect(() => {
    handleScroll(resultsContainer.current);
  }, [words]);

  useEffect(() => {
    console.log('the menu was opened');
  }, [appState.isMenuOpen]);

  useEffect(() => {
    if (searchTerm !== '') {
      async function doSearch() {
        try {
          const response = await Axios.post('/getWords', {
            searchTerm,
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
  }, [searchTerm]);

  function handleWordleFormSubmit(e) {
    e.preventDefault();
    // example of final regular expression: (?=\w*a)(?=\w*b)(?!\w*[lyp])^s([a-z && ^lyp])h[a-z && ^lyp][a-z&& ^lyp]$
    const fields = e.target;
    const formFields = fields.elements;

    const excluded = formFields.excludedLetters.value.toLowerCase();
    const included = formFields.includedLetters.value.toLowerCase();

    const excludedLookAhead = `(?!\\w*[${excluded}])`;
    const unknownLetterRegEx = `([a-z && ^${excluded}])`;
    let includedLookAhead = '';
    const letters = included.split('');
    for (const letter of letters) {
      includedLookAhead = includedLookAhead.concat(`(?=\\w*${letter})`);
    }

    let regex = includedLookAhead.concat(excludedLookAhead);
    regex = regex.concat('^');
    for (let i = 1; i < 6; i++) {
      const value = fields[i].value.toLowerCase();
      if (value) {
        regex = regex.concat(value);
      } else {
        regex = regex.concat(unknownLetterRegEx);
      }
    }
    regex = regex.concat('$');
    setSearchTerm(regex);
  }
  return (
    <Page title="Wordle Search">
      <h2 className="text-center">Word Search</h2>
      <p className="lead text-muted text-center">
        Find the words that match your search
      </p>
      <form className="wordle-form" onSubmit={handleWordleFormSubmit}>
        <div className="form-group wordle-word">
          <fieldset>
            <legend>Words in correct position</legend>
            <div className="wordle-letters">
              <label htmlFor="first-position" className="hidden-accessibly">
                First position
              </label>
              <input
                id="first-position"
                name="first-position"
                className="form-field wordle-letter-input"
              />
              <label htmlFor="second-position" className="hidden-accessibly">
                First position
              </label>
              <input
                id="second-position"
                name="second-position"
                className="form-field wordle-letter-input"
              />
              <label htmlFor="third-position" className="hidden-accessibly">
                First position
              </label>
              <input
                id="third-position"
                name="third-position"
                className="form-field wordle-letter-input"
              />
              <label htmlFor="fourth-position" className="hidden-accessibly">
                First position
              </label>
              <input
                id="fourth-position"
                name="fourth-position"
                className="form-field wordle-letter-input"
              />
              <label htmlFor="fifth-position" className="hidden-accessibly">
                First position
              </label>
              <input
                id="fifth-position"
                name="fifth-position"
                className="form-field wordle-letter-input"
              />
            </div>
          </fieldset>
        </div>
        <div className="form-group search-field">
          <label htmlFor="regex" className="text-muted mb-1">
            <small>Letters included in the word</small>
          </label>
          <input
            id="included-letters"
            name="includedLetters"
            className="form-field"
            type="search"
            placeholder="Included letters"
            autoComplete="off"
          />
          <span>Example: ABCZD</span>
        </div>
        <div className="form-group search-field">
          <label htmlFor="regex" className="text-muted mb-1">
            <small>Letters excluded from the word</small>
          </label>
          <input
            id="excluded-letters"
            name="excludedLetters"
            className="form-field"
            type="search"
            placeholder="Excluded letters"
            autoComplete="off"
          />
          <span>Example: LMNOP</span>
        </div>
        <button
          type="submit"
          className="py-3 mt-4 btn btn-lg btn-success btn-block"
        >
          Search
        </button>
      </form>
      {words.length > 0 && (
        <div
          className="results mt-4"
          ref={resultsContainer}
          id="resultsContainer"
        >
          <h2>Results</h2>
          <p>{words.length} matches found:</p>
          <ul>
            {words.map((word, index) => {
              return <li key={index}>{word.name}</li>;
            })}
          </ul>
        </div>
      )}
    </Page>
  );
}

export default WordleSearch;
