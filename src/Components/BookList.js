import React from 'react'
import BookShow from './BookShow'
import { useContext } from 'react'
import BooksContext from '../Context/Books'
import useBooksContext from '../hooks/use-books-context'

function BookList() {

  const {books } = useBooksContext
  const renderedBooks = books.map((book)=>{
    return <BookShow id={book.id} book={book.title} />
  })
  return (
    <div className='book-list'>
      
      {renderedBooks}
    </div>
  )
}

export default BookList