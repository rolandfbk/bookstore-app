const CHECK_STATUS   = 'bookstore/categories/CHECK_STATUS';

const state = [];

export const addBook = (status) => {
  return { type: CHECK_STATUS, status };
}

const categoriesReducer = (state = '', action) => {
  switch(action.type) {
    case CHECK_STATUS: return 'Under construction';
    default: return state;
  }
}

export default categoriesReducer;