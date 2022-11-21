import React from 'react';
import Modal from "./Modal"
import './swap.css'
import styled from 'styled-components';

function ItemView({ onClose, open, title, description, image }) {

  const Button = styled.button`

  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
	background-color: blue;
  }
`;

  return (

    <Modal modalLable='Your item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} />
        <div id="contact-button">
          <Button
            style={{
              backgroundColor: "#000000",
              padding: "1px 20px",
              fontSize: "12px",
            }} variant="contained">
            <a id = "contact-text" href="https://www.facebook.com/tribuidinh0901" target="_blank" rel="noopener noreferrer">Contact Me</a>
          </Button>
        </div>
      </div>
    </Modal>

  )
}

export default ItemView
