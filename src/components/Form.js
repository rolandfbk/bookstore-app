import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books'

const Form = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(inputs));
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" name="title" placeholder="Title" value={inputs.title || ""} onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" value={inputs.author || ""} onChange={handleChange} />
      <button typeof='submit'>Add book</button>
    </form>
  )
};

export default Form;