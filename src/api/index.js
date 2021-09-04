import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

//const url = 'http://localhost:5000/assets';
const url = '/assets';
export const fetchAssets = () => API.get(url);
export const createAsset = (newAsset) => API.post(url, newAsset);
export const likeAsset = (id) => API.patch(`${url}/${id}/likeAsset`);
export const updateAsset = (id, updatedAsset) =>
  API.patch(`${url}/${id}`, updatedAsset);
export const deleteAsset = (id) => API.delete(`${url}/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
