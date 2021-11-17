import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DetailsItemBlog from 'components/molecules/DetailsItemBlog/DetailsItemBlog';
import Footer from 'components/molecules/Footer/Footer';
import LoginDetails from 'components/organism/auth/Login/LoginDetails';
import { routes } from 'routes/routes';
import UserPage from 'components/organism/UserPage/UserPage';
import OrderPage from 'components/organism/ShopProducts/OrderPage/OrderPage';
import Menu from 'components/organism/Navbar/Navbar';
import NotFound from 'components/atoms/404/NotFound';
import Layout from 'components/organism/Layout/Layout';
import Searchbar from 'components/atoms/Searchbar/Searchbar';
import Faq from 'components/molecules/Footer/FooterDetails/FAQ/Faq';
import Regulation from 'components/molecules/Footer/FooterDetails/Regulation/Regulation';
import ErrorBoundary from 'hoc/ErrorBoundary';
import { reducer, initialState } from '../reducer';
import AuthenticatedRoute from '../hoc/AuthenticatedRoute';
import AuthContext from '../context/authContext';
import ReducerContext from '../context/reducerContext';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';

function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const menu = <Menu />;
  const content = (
    <Switch>
      <AuthenticatedRoute path={routes.userPage} component={UserPage} />
      <Route exact path={routes.home} render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />
      <Route exact path={routes.shop} component={Shop} />
      <Route exact path={routes.about} component={About} />
      <Route exact path={routes.blog} component={Blog} />
      <Route path={routes.login} component={LoginDetails} />
      <Route path={routes.bloges} component={DetailsItemBlog} />
      <Route exact path={routes.contact} component={Contact} />
      <Route exact path={routes.search} component={Searchbar} />
      <Route exact path={routes.order} component={OrderPage} />
      <Route exact path={routes.faq} component={Faq} />
      <Route exact path={routes.regulation} component={Regulation} />

      <Route component={NotFound} />
    </Switch>
  );

  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          user: state.user,
          login: user => dispatch({ type: 'login', user }),
          logout: () => dispatch({ type: 'logout' }),
        }}
      >
        <ReducerContext.Provider value={{ state, dispatch }}>
          <ErrorBoundary>
            <Layout menu={menu} content={content} footer={footer} />
          </ErrorBoundary>
        </ReducerContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default Root;
