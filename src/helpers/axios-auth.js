import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://clothes-shop-react-a38fe-default-rtdb.firebaseio.com',
  params: {
    key: process.env.REACT_APP_FIREBASE_API_KEY,
  },
});

export default instance;
