import React from 'react';

const SingleBook = (props) => {
  const {author, title} = props.book[1][0];
  const id = props.book[0];

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