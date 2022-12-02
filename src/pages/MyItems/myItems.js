import React from 'react';
import './myItems.css'
import Item from './Item'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, doc } from "firebase/firestore"
import { db, auth } from '../../firebase'
import AddItem from './AddItem'
import Grid from '@mui/material/Grid';

export default function ItemsList() {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [Items, setItems] = useState([])

  /* function to get all Items from firestore in realtime */
  useEffect(() => {

    const user = auth.currentUser;
    if(user){
      console.log("Hello")
      const usersDocRef = doc(db, "users", user.uid)
      const colRef = collection(usersDocRef, "items")
      const itemColRef = query(colRef, orderBy('created', 'desc'))
      onSnapshot(itemColRef, (snapshot) => {
        setItems(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    }

  }, [])

  return (
    <div className='ItemManager'>
      <header>My Items List</header>
      <div className='ItemManager__container'>
        <button
          onClick={() => setOpenAddModal(true)}>
          Add Item +
        </button>
      </div>
      
      <div class = "item_grid">
      <Grid container spacing={8}>
        {Items.map((items) => (
          <Grid key={items} xs={12} sm={6} md={6}>
            <Item
              id={items.id}
              key={items.id}
              completed={items.data.completed}
              title={items.data.title}
              description={items.data.description}
              image={items.data.image}
            />
          </Grid>
        ))}

      </Grid>
      </div>

      {openAddModal &&
        <AddItem onClose={() => setOpenAddModal(false)} open={openAddModal} />
      }
    </div>
  )
}
