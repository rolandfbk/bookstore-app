import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer
});

export default rootReducer;