import { useEffect, useContext } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import BookShow from "./Components/BookShow";
import BooksContext from "./Context/Books";


function App() {
  const {fetchBooks}= useContext(BooksContext)
  useEffect(() => {
    fetchBooks();
  },[]);
  
  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
      {/* <BookShow  /> */}
    </div>
  );
}

export default App;
