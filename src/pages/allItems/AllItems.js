import React from 'react';
import './allItems.css'
import Item from './Item'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../firebase'
import AddItem from './AddItem'
import Grid from '@mui/material/Grid';

export default function AllItems() {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [Items, setItems] = useState([])

  /* function to get all Items from firestore in realtime */
  useEffect(() => {
    const itemColRef = query(collection(db, 'items'), orderBy('created', 'desc'))
    onSnapshot(itemColRef, (snapshot) => {
      setItems(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <div className='itemManager'>
      <header class = 'all_item_header'>All Items List</header>
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
