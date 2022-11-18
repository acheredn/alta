import React from 'react';
import {
  Highlight,
} from 'react-instantsearch-dom';
import './item.css'


export default function Hit(props) {
  

    return (
      <article className='image-container'>
        <h1>
          <Highlight attribute="title" hit={props.hit} />
        </h1>
        <p className='item-description'>
          <Highlight attribute="description" hit={props.hit} />
        </p>
          <p className='image'> 
          <img src={props.hit.image} />
            </p>
      </article>
    );
  }