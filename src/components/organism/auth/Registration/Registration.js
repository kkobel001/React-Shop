// import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import { Link } from 'react-router-dom';
// import Helpers from 'helpers/Helpers';

// const validate = form => {
//   const errors = {};

//   if (!form.name) {
//     errors.name = 'Name is required';
//   }
//   if (!form.surname) {
//     errors.surname = 'Surame is required';
//   }

//   if (!form.email) {
//     errors.email = 'Email is required';
//   }
//   if (!Helpers.validateEmail(form.email)) {
//     errors.email = 'Email is not correct';
//   }
//   if (!form.password) {
//     errors.password = 'Password is required';
//   }

//   return errors;
// };

// const InitialFormState = {
//   password: '',
//   email: '',
// };

// const Registration = () => {
//   const [error, setError] = useState(false);
//   const [form, setForm] = useState(InitialFormState);

//   const resetError = () => {
//     // setForm(InitialFormState);
//     setError({});
//   };

//   const handleSignIn = () => {
//     resetError();

//     signInWithEmailAndPassword(getAuth(), form.email, form.password)
//       .then(userCredential => {
//         console.log(userCredential);
//       })
//       .catch(err => {
//         console.log(err);

//         switch (err.code) {
//           case 'auth/invalid-email':
//           case 'auth/user-not-found':
//             setError({ email: err.message });
//             break;
//           case 'auth/wrong-password':
//             setError({ password: err.message });
//             break;
//           default:
//             setError('Something went wrong');
//         }
//       });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const errorText = validate(form);

//     if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
//       setError(errorText);
//     } else {
//       handleSignIn();
//     }
//   };

//   const updateField = e => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//       InitialFormState,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input type="text" value={form.email} placeholder="Email" name="email" onChange={updateField} />
//         <p className="error-message">{error.email}</p>
//       </div>
//       <div>
//         <input type="text" value={form.email} placeholder="Email" name="email" onChange={updateField} />
//         <p className="error-message">{error.email}</p>
//       </div>
//       <div>
//         <input type="text" value={form.email} placeholder="Email" name="email" onChange={updateField} />
//         <p className="error-message">{error.email}</p>
//       </div>

//       <div className="login-container">
//         <input type="password" value={form.password} placeholder="Password" name="password" onChange={updateField} />
//         <p className="error-message">{error.password}</p>
//       </div>
//       <div>
//         <Link to="/" className="login-link">
//           <p>Forgot yout password?</p>
//         </Link>
//       </div>
//       <div className="btn-row">
//         <button className="btn-formLog" type="submit">
//           Sign In
//         </button>
//         <button className="btn-formLog" type="submit">
//           <FacebookIcon />
//           Sign In with Facebook
//         </button>
//       </div>
//       <div className="section-reg">
//         <span>
//           Dont have account?
//           <Link to="./" className="reg-link">
//             Sign up
//           </Link>
//         </span>
//       </div>
//     </form>
//   );
// };

// export default Registration;
