import React, { useState,useContext } from 'react'
import BooksContext from '../Context/Books';

function BookEdit({book,onSubmit,id}) {
  const[title,setTitle] = useState(book)
  const {editBookById} = useContext(BooksContext)

  const handleChange = (e) =>{
    setTitle(e.target.value);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmit()
    editBookById(id,book)
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label >Title</label>
      <fieldset>
        Title
      </fieldset>
      <input className='input' value={title} onChange={(e)=>handleChange(e)} />
      <button className='button is-primary' type='submit'>Save</button>
    </form>
  )
}

export default BookEdit