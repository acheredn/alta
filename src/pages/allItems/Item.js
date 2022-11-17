import React from 'react';
import './item.css'
import { useState } from 'react'
import ItemView from './swap'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase'

function AllItem({ id, title, description, image, completed }) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({ view: false })

  const handleClose = () => {
    setOpen({  view: false })
  }

  /* function to update firestore */
  const handleChange = async () => {
    const itemDocRef = doc(db, 'items', id)
    try {
      await updateDoc(itemDocRef, {
        completed: checked
      })
    } catch (err) {
      alert(err)
    }
  }

  /* function to delete a document from firstore */

  return (
    <div className={`item ${checked && 'item--borderColor'}`}>
      <div>
        <input
          id={`checkbox-${id}`}
          className='checkbox-custom'
          name="checkbox"
          checked={checked}
          onChange={handleChange}
          type="checkbox" />
        <label
          htmlFor={`checkbox-${id}`}
          className="checkbox-custom-label"
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <div className='item__body'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div class = "image">
          <img width = "200" height = "200" src={image}/>
        </div> 
        <div className='item__buttons'>
          <button className='item_viewButton'
            onClick={() => setOpen({ ...open, view: true })}>
            swap
          </button>
          <button className='item_viewButton'
            onClick={() => setOpen({ ...open, view: true })}>
            purchase
          </button>
        </div>
      </div>

      {open.view &&
        <ItemView
          onClose={handleClose}
          title={title}
          description={description}
          image = {image}
          open={open.view} />
      }

    </div>
  )
}

export default AllItem