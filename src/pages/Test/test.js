import { useState, useEffect } from 'react'
import { collection, addDocs, getDocs, query, orderBy, onSnapshot } from "firebase/firestore"
import SearchBar from './searchbar';
import { db } from '../../firebase'
import './test.css'

export default function Test() {

    const [todos, setTodos] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const fetchPost = async () => {
       
      await getDocs(collection(db, "items"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setTodos(newData);                
              console.log(todos, newData);
          })
     
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])

    return (
      <div className='test'>
        <h1 className='title'>Search Quotes</h1>
  
        <div className='disclaimer-container'>
          <p className='disclaimer'>
            Search through the clothes you'd like!
          </p>

        {/* </div>
        <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>
        { noResults &&
          <p className='no-results'>
            No results found.
          </p>
        } */}

          <div className="main-content">
                    {
                        todos?.map((todo,i)=>(
                            <p key={i}>
                                {todo.title}
                            </p>
                        ))
                    }
                </div>

        {/* <div className='main-content'>
          {renderedQuotes}
        </div> */}
      </div>
      </div>
    );
  };