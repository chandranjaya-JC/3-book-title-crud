import React, { useContext, useState } from 'react'
import BooksContext from '../Context/Books'

function BookCreate() {
    const [title,setTitle] = useState('')
    const {createBook} = useContext(BooksContext)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createBook(title)
        setTitle('')
    }
  return (
    <div className='book-create'>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' type='text' value={title} onChange={(e)=>handleChange(e)} autoFocus/>
            <button className='button' type="submit">Create..!</button>

        </form>
    </div>
  )
}

export default BookCreate