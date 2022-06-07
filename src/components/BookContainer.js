import React from "react";
import BookList from "./BookList";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { removeBook } from '../redux/books/books'

const BookContainer = () => {
  const listing = useSelector(state => state.bookReducer, shallowEqual);
  const dispatch = useDispatch();
  const deleteBook = id => {
      dispatch(removeBook(id))
  }

  return (
    <BookList listing={listing} deleteBook={deleteBook} />
  );
};

export default BookContainer;