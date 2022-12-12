import React, { useState,useContext } from 'react';
import BooksContext from '../Context/Books';
import BookEdit from './BookEdit';


function BookShow({onEdit,onDelete,id,book}) {
  const[showEdit,setShowEdit] = useState(false)

  const {deleteBookByID} = useContext(BooksContext);
  const handleDelete = () => {
    deleteBookByID(id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit);
  }
  const handleSubmit = ()=>{
    setShowEdit(false)
  }

  let content = <h3>{book}</h3>;
  if(showEdit){
    content = <BookEdit onSubmnit={handleSubmit} id={id} book={book}/>
  }
  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>Edit</button>
        <button className='delete' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow