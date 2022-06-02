import React from 'react';

const Form = () => {
  return (
    <div>
      <form id="bookForm" className="bookForm">
        <input type="text" id="title" placeholder="Title" required />
        <input type="text" id="author" placeholder="Author" required />
        <button typeof='submit'>Add book</button>
      </form>
    </div>
  )
};

export default Form;