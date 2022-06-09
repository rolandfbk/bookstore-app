import React from "react"
import SingleBook from "./Book";

const BookList = (props) => {
  return (
    <ul className="book-ul">
      {props.listing.map(book => (
        <SingleBook
          key={book[0]}
          book={book}
          deleteBook={props.deleteBook}
        />
      ))}
    </ul>
  )
};

export default BookList;