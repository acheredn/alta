import React, { useEffect, useState } from 'react';
import './searchbar.css'

export default function SearchBar({onSearchSubmit, clearResults}) {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    useEffect(() => {
        if(term !== ''){
            onSearchSubmit(term);
        }
        else{
            clearResults();
        }
    }, [term]);

    return (
      <div className='searchbar'>
        <input 
            className='searchbar-input' 
            type='text' 
            placeholder="Search user by name. . ."
            onChange={e => setDebouncedTerm(e.target.value)}
            value={debouncedTerm}/>
      </div>
    );
};