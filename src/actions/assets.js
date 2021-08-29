import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getAssets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAssets();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAsset = (asset) => async (dispatch) => {
  try {
    const { data } = await api.createAsset(asset);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAsset = (id, asset) => async (dispatch) => {
  try {
    const { data } = await api.updateAsset(id, asset);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeAsset = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeAsset(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAsset = (id) => async (dispatch) => {
  try {
    await api.deleteAsset(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
