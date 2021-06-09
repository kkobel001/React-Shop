import React from 'react';
import LoginDetails from './LoginDetails';
import './Login.scss';

const Login = () => (
  // const handleSignup = () => {
  //   clearValue();
  //   createUserWithEmailAndPassword(getAuth, email, password)
  //     .then(userCredential => {
  //       // Signed in
  //       // const user = userCredential.user;
  //       // ...
  //     })
  //     .catch(err => {
  //       switch (err.code) {
  //         case 'auth/email-in-use':
  //         case 'auth/user-disabled':
  //           setEmailError(err.message);
  //           break;
  //         case 'auth/wrong-password':
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     });
  // };

  // const handleLogOut = () => {
  //   signOut(getAuth)
  //     .then(() => {
  //       // Sign-out successful.
  //     })
  //     .catch(error => {
  //       // An error happened.
  //     });
  // };

  // const authStateChanged = () => {
  //   onAuthStateChanged(getAuth, user => {
  //     if (user) {
  //       clearValue();
  //       setUser(user);
  //     } else {
  //       setUser('');
  //     }
  //   });
  // };
  // useEffect(() => {
  //   authStateChanged();
  // }, []);

  <div className="wrapper-login">
    <div className="account-form">
      <h2>Sign in to your account</h2>
      <LoginDetails />
    </div>
  </div>
);
export default Login;
