import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'clothes-shop-react-a38fe.firebaseapp.com',
  databaseURL: 'https://clothes-shop-react-a38fe-default-rtdb.firebaseio.com',
  projectId: 'clothes-shop-react-a38fe',
  storageBucket: 'clothes-shop-react-a38fe.appspot.com',
  messagingSenderId: '686682204013',
  appId: '1:686682204013:web:5e69eb745ac6527ee5dc64',
  measurementId: 'G-F2ZRRWYXNV',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
