import React from 'react';

const SingleBook = (props) => {
  const {author, title, category} = props.book[1][0];
  const id = props.book[0];

  return(
    <li className="book-li">
      <div className="book-details">
        <p className="category-name">{category}</p>
        <h2>{title}</h2>
        <p className="book-author">{author}</p>
        <div className="book-button-actionList">
          <button className="btn-link-book">Comments</button>
          <span className="book-panel">|</span>
          <button className="btn-link-book" onClick={() => props.deleteBook(id)}>Remove</button>
          <span className="book-panel">|</span>
          <button className="btn-link-book">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div class="Oval-2"></div>
        <div>
          <p className="Percent-Complete">64%</p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <p className="Current-Chapter">CURRENT CHAPTER</p>
        <p className="Current-Lesson">Chapter 17</p>
        <button className="Update-progress">Update progress</button>
      </div>
    </li>
  );
};


export default SingleBook;