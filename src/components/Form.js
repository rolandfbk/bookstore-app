import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid"
import { addBook } from '../redux/books/books'

const Form = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value, 'id': uuidv4()}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(inputs).then((value) => {dispatch(value)})
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" name="title" placeholder="Title" value={inputs.title || ""} onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" value={inputs.author || ""} onChange={handleChange} />
      <button typeof='submit'>Add book</button>
      <br></br><br></br><br></br>
    </form>

  )
};

export default Form;