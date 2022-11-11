import { useState, useEffect } from 'react'
import { collection, addDocs, getDocs, query, orderBy, onSnapshot, where } from "firebase/firestore"
import SearchBar from './searchbar';
import Item from './item';
import { db } from '../../firebase'
import './test.css'

export default function Test() {

    const [items, setItems] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const onSearchSubmit = async term => {

      console.log('New Search submit:', term);

      const q = query(collection(db, "items"), where("title", "==", term));

      await getDocs(q)
          .then((querySnapshot)=>{               
              const itemsArray = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setItems(itemsArray);                
              console.log(itemsArray);
          })
  }

  const clearResults = () => setItems([]);

  const renderedItems = items.map((item, i) => {
    return <Item item={item} key={i} />
  })
 
  useEffect(()=>{
      onSearchSubmit();
  }, [])

    return (
      <div className='test'>
      <h1 className='title'>Search Items</h1>

      <div className='disclaimer-container'>
        <p className='disclaimer'>
        </p>

      </div>
      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>
      { noResults &&
        <p className='no-results'>
          No results found.
        </p>
      }

      <div className='main-content'>
        {renderedItems}
      </div>
    </div>
    );
  };