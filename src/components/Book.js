import React from 'react';

const SingleBook = (props) => {
  const {title, author} = props.book;
  return(
    <li>
      <div>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <button>Delete</button>
      </div>
    </li>
  );
};


export default SingleBook;