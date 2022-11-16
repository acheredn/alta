import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Panel,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import Hit from './hit'
import './test.css'


export default function Test() {


const searchClient = algoliasearch(
  'FUH27QK0B4',
  '95975dfd853601f433605af8a9de4734'
);

return (
        <div className="container">
        <InstantSearch searchClient={searchClient} indexName="items">
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters">
              <Panel header="Search">
                <RefinementList attribute="items" />
              </Panel>
            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                // translations={{
                //   placeholder: '',
                // }}
              />

              <Hits hitComponent={Hit} />

              {/* <div className="pagination">
                <Pagination />
              </div> */}
              
            </div>
          </div>
        </InstantSearch>
      </div>

  );
}