import React from 'react';
import Modal from "./Modal"
import './addItem.css'
import { db } from '../../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { v4 } from "uuid";
import storage from '../../firebase';
import styled from 'styled-components';
import { useEffect, useState } from "react";

function AddTask({ onClose, open }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [imageUpload, setImageUpload] = useState('');



  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    uploadFile();
    try {
      await addDoc(collection(db, 'items'), {
        title: title,
        description: description,
        image: imageUrls,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

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
    <Modal modalLable='Add Item' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input
          type='text'
          name='title'
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder='Enter title' />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter item description'
          value={description}></textarea>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <div class='image-map'>
        </div>
        <button type='submit'>Done</button>
      </form>
    </Modal>
  )
}

export default AddTask
