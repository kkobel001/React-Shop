import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'services/firebase';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Root from './views/Root';
import reportWebVitals from './reportWebVitals';

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
