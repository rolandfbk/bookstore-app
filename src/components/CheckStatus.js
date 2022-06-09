import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../redux/categories/categories'

const CheckStatus = () => {
  const status = useSelector(state => state.categoriesReducer, shallowEqual);

  const dispatch = useDispatch();

  const showStatus = () => {
    dispatch(checkStatus())
  }

  return (
    <div className="categories">
      <h1>{status}</h1>
      <button onClick={() => {showStatus()}}>Check Status</button>
    </div>
  )
};

export default CheckStatus;