import React from 'react';
import './item.css'
import { useState } from 'react'
import ItemView from './ItemView'
import EditItem from './EditItem'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function MyItems({ id, title, description, image, completed }) {

  const [open, setOpen] = useState({ edit: false, view: false })

  const handleClose = () => {
    setOpen({ edit: false, view: false })
  }

  /* function to update firestore */
  const handleChange = async () => {
    const itemDocRef = doc(db, 'items', id)
    try {
      await updateDoc(itemDocRef, {
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

  const submit = () => {

    confirmAlert({
      title: 'Are you sure?',
      message: 'This action cannot be undone. This will permanently delete this item from your list. Do you still want to delete this item?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete()
        },
        {
          label: 'No',
        }
      ]
    });
  }

  return (
    <div className={`item ${'item--borderColor'}`}>
      <div>
      </div>
      <div className='item__body'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div class="image">
          <img width="200" height="200" src={image} />
        </div>
        <div className='item__buttons'>
          <div className='item__deleteNedit'>
            <button
              className='item__editButton'
              onClick={() => setOpen({ ...open, edit: true })}>
              Edit
            </button>
            <button className='item__deleteButton' onClick={submit}>Delete</button>
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
          image={image}
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