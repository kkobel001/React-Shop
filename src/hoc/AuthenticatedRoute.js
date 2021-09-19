import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReducerContext from '../context/reducerContext';

export default function AuthenticatedRoute(props) {
  const context = useContext(ReducerContext);
  // eslint-disable-next-line react/destructuring-assignment
  return context.state.user ? <Route {...props} /> : <Redirect to="/zaloguj" />;
}
