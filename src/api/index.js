import axios from 'axios';

const url = 'http://localhost:5000/assets';

export const fetchAssets = () => axios.get(url);
export const createAsset = (newAsset) => axios.post(url, newAsset);
export const likeAsset = (id) => axios.patch(`${url}/${id}/likeAsset`);
export const updateAsset = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deleteAsset = (id) => axios.delete(`${url}/${id}`);
