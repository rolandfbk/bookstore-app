const ADD   = 'bookstore/book/ADD';
const REMOVE = 'bookstore/book/REMOVE';

export const addBook = (book) => {
  return { type: ADD, payload: book, };
}

export const removeBook = (id) => {
  return { type: REMOVE, payload: id };
}

const bookReducer = (state = [{id: 1, title: 'Let Love Lead', author: 'Roland',},], action) => {
  switch (action.type) {
    case ADD: return [...state, { id: state.length + 1, ...action.payload }];
    case REMOVE: return state.filter((item => item.id !== action.payload));
    default: return state;
  }
}

export default bookReducer;