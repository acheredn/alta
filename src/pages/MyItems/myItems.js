import React from 'react';
import './myItems.css'
import Item from './Item'
import { useState, useEffect } from 'react'
import { collection, query, orderBy,  doc, getDocs,  } from "firebase/firestore"
import { db, auth } from '../../firebase'
import AddItem from './AddItem'
import Grid from '@mui/material/Grid';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function ItemsList() {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [Items, setItems] = useState([])

  const [user] = useAuthState(auth);
  /* function to get all Items from firestore in realtime */
  useEffect(()=> {
    (async () => {
      if (user) {
        const usersDocRef = doc(db, "users", user.uid)
        const colRef = collection(usersDocRef, "items")
        const querySnapshot = await getDocs(colRef);
        setItems(querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      }
    })();
  }, [user]);


  return (
    <div className='ItemManager'>
      <div className='ItemManager__container'>
        <button
          onClick={() => setOpenAddModal(true)}>
          Add Item +
        </button>
      </div>

      <div class="item_grid">
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
                contactNum ={items.data.contactNum}

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
