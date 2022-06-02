import React, { useState } from "react"
import BookList from "./BookList";

const BookContainer = () => {
  const allBooks = [
    {
      id: 1,
      title: 'Let Love Lead',
      Author: 'Roland',
    },
  ];

  const [listing, setBooks] = useState(allBooks);

  return (
    <BookList listing={listing} />
  );
};

export default BookContainer;