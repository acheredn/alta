import React from 'react';
import './item.css'


export default function Item({item}){
  return (
    <div className='quote-container'>
      <div className = 'image'> <img src={item.image}/> </div>
      <p className="quote">
        "{item.description}"
      </p>
      <p className="quote-author">
        Found
        <span className='highlight'> {item.title} </span>
      </p>
    </div>
  );
};