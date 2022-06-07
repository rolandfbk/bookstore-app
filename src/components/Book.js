import React from 'react';

const SingleBook = (props) => {
  const {id, title, author} = props.book;
  return(
    <li>
      <div>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <button onClick={() => props.deleteBook(id)}>Delete</button>
      </div>
    </li>
  );
};


export default SingleBook;