import Modal from "./Modal"
import './taskItem.css'

function TaskItem({onClose, open, title, description, imageUrls}) {

  return (
    <Modal modalLable='Task Item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div class='image-map'>
					{imageUrls.map((url) => {
						return <img src={url}/>

					})}
				</div>
      </div>
    </Modal>
  )
}

export default TaskItem
