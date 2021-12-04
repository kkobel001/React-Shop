import { useContext, useDebugValue } from 'react';
import AuthContext from 'context/authContext';

export default function useAuth() {
  const authContext = useContext(AuthContext);

  const auth = authContext.user;

  useDebugValue(auth ? 'Login in' : 'Log out');

  const setAuth = user => {
    if (user) {
      //   login
      authContext.login(user);
      window.localStorage.setItem('token-data', JSON.stringify(user));
    } else {
      //   logout
      authContext.logout();
      window.localStorage.removeItem('token-data');
    }
  };

  return [auth, setAuth];
}
