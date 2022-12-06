import React from 'react';
import {
  Highlight,
} from 'react-instantsearch-dom';
import { useState } from 'react'
import './hit.css'
import ItemView from '../AllItems/swap'

export default function Hit(props) {

  const [open, setOpen] = useState({ view: false })

  const handleClose = () => {
    setOpen({ view: false })
  }
  

    return (
      <div className={`item ${'item--borderColor'}`}>
        <div className ='item__body'>
        <h2> <Highlight attribute="title" hit={props.hit}/> </h2>
        <p> <Highlight attribute="description" hit={props.hit} /> </p>
          <div class ='image'> 
          <img width = "200" height = "200" src={props.hit.image} />
            </div>
          <div className='item__buttons'>
            <button className='item_viewButton'
            onClick={() => setOpen({ ...open, view: true })}>
            Details
          </button>
        </div>
      </div>
      {open.view &&
        <ItemView
          onClose={handleClose}
          title={props.hit.title}
          description={props.hit.description}
          image = {props.hit.image}
          open={open.view} />
      }
    </div>
    );
  }