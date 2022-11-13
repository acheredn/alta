import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';


export default function Hit(props) {
    return (
      <article>
        <h1>
          <Highlight attribute="title" hit={props.hit} />
        </h1>
        <p>
          <Highlight attribute="description" hit={props.hit} />
        </p>
      </article>
    );
  }