import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const assetReducer = (assets = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return assets.map((asset) => (asset._id === action.payload._id ? action.payload : asset));
    case CREATE:
      return [...assets, action.payload];
    case UPDATE:
      return assets.map((asset) => (asset._id === action.payload._id ? action.payload : asset));
    case DELETE:
      return assets.filter((asset) => asset._id !== action.payload);
    default:
      return assets;
  }
};
export default assetReducer

