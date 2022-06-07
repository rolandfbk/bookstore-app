import React from "react"
import SingleBook from "./Book";

const BookList = (props) => {
  return (
    <ul>
      {props.listing.map(book => (
        <SingleBook
          key={book.id}
          book={book}
          deleteBook={props.deleteBook}
        />
      ))}
    </ul>
  )
};

export default BookList;