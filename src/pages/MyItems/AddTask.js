import Modal from "./Modal"
import { useState } from 'react'
import './addTask.css'
import { db } from '../../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
import storage from '../../firebase';
import styled from 'styled-components';
function AddTask({ onClose, open }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */
  const [imageUpload, setImageUpload] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'items'), {
        title: title,
        description: description,
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
          placeholder='Enter item decription'
          value={description}></textarea>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <Button onClick={uploadFile}> Upload Image</Button>
        <div class='image-map'>
          {imageUrls.map((url) => {
            return <img src={imageUrls[0]} />

          })}
        </div>
        <button type='submit'>Done</button>
      </form>
    </Modal>
  )
}

export default AddTask
