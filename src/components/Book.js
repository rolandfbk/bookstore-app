import React from 'react';

const SingleBook = (props) => {
  const {author, title} = props.book[1][0];
  const id = props.book[0];

  return(
    <li className="book-li">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-button-actionList">
          <button className="btn-delete-book" onClick={() => props.deleteBook(id)}>Delete</button>
        </div>
      </div>
    </li>
  );
};


export default SingleBook;