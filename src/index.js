import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import Root from './views/Root';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: 'AIzaSyDnDCaVwSwTPZYFp7he5C3mfcYjrB7Ap3c',
  authDomain: 'clothes-shop-react-a38fe.firebaseapp.com',
  databaseURL: 'https://clothes-shop-react-a38fe-default-rtdb.firebaseio.com',
  projectId: 'clothes-shop-react-a38fe',
  storageBucket: 'clothes-shop-react-a38fe.appspot.com',
  messagingSenderId: '686682204013',
  appId: '1:686682204013:web:5e69eb745ac6527ee5dc64',
  measurementId: 'G-F2ZRRWYXNV',
});

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
