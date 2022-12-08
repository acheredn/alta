import React from 'react';
import './item.css'


export default function AllItem({ id, title, description, image, completed }) {


    const [open, setOpen] = useState({ view: false })
  
    const handleClose = () => {
      setOpen({ view: false })
    }
  
    /* function to update firestore */
    const handleChange = async () => {
      const itemDocRef = doc(db, 'items', id)
      try {
        await updateDoc(itemDocRef, {
         
        })
      } catch (err) {
        alert(err)
      }
    }
  
    return (
      <div className={`item ${'item--borderColor'}`}>
        <div className='item__body'>
          <h2>{title}</h2>
          <p>{description}</p>
          <div class = "image">
            <img width = "200" height = "200" src={image}/>
          </div> 
          <div className='item__buttons'>
            <button className='item_viewButton'
              onClick={() => setOpen({ ...open, view: true })}>
              Details
            </button>
          </div>
        </div>
  
        {open.view &&
          <ItemView
            onClose={handleClose}
            title={title}
            description={description}
            image = {image}
            open={open.view} />
        }
  
      </div>
    )
  }