import React from 'react';
import Modal from "./Modal"
import './itemView.css'

function ItemView({onClose, open, title, description, image}) {

  return (
    <Modal modalLable='Task Item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image}/>
  

      </div>
    </Modal>
  )
}

export default ItemView
