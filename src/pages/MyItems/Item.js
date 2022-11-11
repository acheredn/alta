import React from 'react';
import './item.css'
import { useState } from 'react'
import ItemView from './ItemView'
import EditItem from './EditItem'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase'

function MyItems({ id, title, description, image, completed }) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({ edit: false, view: false })

  const handleClose = () => {
    setOpen({ edit: false, view: false })
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
  const handleDelete = async () => {
    const itemDocRef = doc(db, 'items', id)
    try {
      await deleteDoc(itemDocRef)
    } catch (err) {
      alert(err)
    }
  }

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
        <img src={image}/>
        <div className='item__buttons'>
          <div className='item__deleteNedit'>
            <button
              className='item__editButton'
              onClick={() => setOpen({ ...open, edit: true })}>
              Edit
            </button>
            <button className='item__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
          <button className='item_viewButton'
            onClick={() => setOpen({ ...open, view: true })}>
            View
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

      {open.edit &&
        <EditItem
          onClose={handleClose}
          toEditTitle={title}
          toEditDescription={description}
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default MyItems