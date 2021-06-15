// import React from 'react';
// import LoginDetails from './LoginDetails';
// import Registration from '../Registration/Registration';
// import './Login.scss';

// const Login = () => {
//   // const handleSignup = () => {
//   //   clearValue();
//   //   createUserWithEmailAndPassword(getAuth, email, password)
//   //     .then(userCredential => {
//   //       // Signed in
//   //       // const user = userCredential.user;
//   //       // ...
//   //     })
//   //     .catch(err => {
//   //       switch (err.code) {
//   //         case 'auth/email-in-use':
//   //         case 'auth/user-disabled':
//   //           setEmailError(err.message);
//   //           break;
//   //         case 'auth/wrong-password':
//   //           setPasswordError(err.message);
//   //           break;
//   //       }
//   //     });
//   // };

//   // const handleLogOut = () => {
//   //   signOut(getAuth)
//   //     .then(() => {
//   //       // Sign-out successful.
//   //     })
//   //     .catch(error => {
//   //       // An error happened.
//   //     });
//   // };

//   // const authStateChanged = () => {
//   //   onAuthStateChanged(getAuth, user => {
//   //     if (user) {
//   //       clearValue();
//   //       setUser(user);
//   //     } else {
//   //       setUser('');
//   //     }
//   //   });
//   // };
//   // useEffect(() => {
//   //   authStateChanged();
//   // }, []);

//   const [isExpanded, setExpanded] = useState(false);
//   const [regist, setRegist]= useState(false);

//   const playExpandingAnimation = () => {
//     setExpanded(true);
//     setTimeout(() => {
//       setExpanded(false);
//     }, 1000,
//   };

//   const switchToSignup = () => {
//     playExpandingAnimation();
//     setTimeout(() => {
//       setActive("signup");
//     }, 400);
//   };

//   const switchToSignin = () => {
//     playExpandingAnimation();
//     setTimeout(() => {
//       setActive("signin");
//     }, 400);
//   };
//   const contextValue = { switchToSignup, switchToSignin };

//   return (

//     <div className="wrapper-login">
//     <div className="account-form">
//       {/* {
//         regist ? (
//           <h2>Sign in to your account</h2>
//           <LoginDetails />
//         )
//         :
//         <h2>Create your account</h2>
//         <Registration />
//       }
//       */}
//       <LoginDetails />
//     </div>
//   </div>
//   )

//   };
// export default Login;
