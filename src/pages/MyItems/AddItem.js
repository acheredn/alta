import React from 'react';
import Modal from "./Modal"
import './addItem.css'
import { db } from '../../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
import storage from '../../firebase';
import { useState } from "react";

function AddTask({ onClose, open }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUpload, setImageUpload] = useState('');
  const [url, setImageUrl] = useState('');


  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        addDoc(collection(db, 'items'), {
          title: title,
          description: description,
          image: url,
          completed: false,
          created: Timestamp.now()
        })
      });
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      uploadFile();
      onClose();
    } catch (err) {
      alert(err)
    }
  }


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