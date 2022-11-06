import Modal from "./Modal"
import './itemView.css'

function TaskItem({onClose, open, title, description, imageUrls}) {

  return (
    <Modal modalLable='Task Item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>{description}</p>

      </div>
    </Modal>
  )
}

export default TaskItem
