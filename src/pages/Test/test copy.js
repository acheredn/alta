import React, { useState } from 'react';
import SearchBar from './searchbar';
import Quote from './item';
import './test.css'

export default function Test() {

    const [quotes, setQuotes] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const onSearchSubmit = async term => {
      console.log('New Search submit:', term);
      const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${term}`)
      if (res.status == 200) {
        const quotesArray = await res.json(term.toLowerCase());
        setQuotes(quotesArray);
      }

      if (res.status == 404) {
        setNoResults();
      }      
    };
  
    const clearResults = () => setQuotes([]);
  
    const renderedQuotes = quotes.map((quote, i) => {
      return <Quote quote={quote} key={i} />
    })

    return (
      <div className='test'>
        <h1 className='title'>Search Quotes</h1>
  
        <div className='disclaimer-container'>
          <p className='disclaimer'>
            Get 10 quotes from your favorite <span className='highlight'>anime</span>!
          </p>

        </div>
        <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>
        { noResults &&
          <p className='no-results'>
            No results found.
          </p>
        }

        <div className='main-content'>
          {renderedQuotes}
        </div>
      </div>
    );
  };