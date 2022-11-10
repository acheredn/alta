import React from 'react';
import './myItems.css'
import Item from './Item'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../firebase'
import AddTask from './AddItem'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { v4 } from "uuid";
import storage from '../../firebase';

function MyItems() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [Items, setItems] = useState([])
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
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

  /* function to get all Items from firestore in realtime */
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });

    const taskColRef = query(collection(db, 'items'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      setItems(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])


  return (
    <div className='taskManager'>
      <header>My Items List</header>
      <div className='taskManager__container'>
        <button
          onClick={() => setOpenAddModal(true)}>
          Add Item +
        </button>
        <div className='taskManager__Items'>

          {Items.map((items) => (
            <Item
              id={items.id}
              key={items.id}
              completed={items.data.completed}
              title={items.data.title}
              description={items.data.description}
              image={items.data.image}
            />
          ))}

        </div>
      </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      }

    </div>
  )
}
export default MyItems;