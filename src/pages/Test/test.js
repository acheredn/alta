import React, { useState } from 'react';
import SearchBar from './searchbar';
import Quote from './quote';
import './test.css'

export default function Test() {

    const [quotes, setQuotes] = useState([]);
    const [noResults, setNoResults] = useState(false);
    

    const onSearchSubmit = async term => {
    console.log('New Search submit:', term);
      const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${term}`);
      const quotesArray = await res.json();
      setNoResults(quotesArray.length === 0);
      setQuotes(quotesArray);
    }
  
    const clearResults = () => setQuotes([]);
  
    const renderedQuotes = quotes.map((quote, i) => {
      return <Quote quote={quote} key={i} />
    })

    return (
        <div className='test'>
          <SearchBar 
          onSearchSubmit={onSearchSubmit} 
          clearResults={clearResults}/>

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