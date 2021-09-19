import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DetailsItemBlog from 'components/molecules/DetailsItemBlog/DetailsItemBlog';
import Footer from 'components/molecules/Footer/Footer';
import LoginDetails from 'components/organism/auth/Login/LoginDetails';
import { routes } from 'routes/routes';
import UserPage from 'components/organism/UserPage/UserPage';
import UserOrder from 'components/organism/UserPage/UserOrder/UserOrder';
import UserAddress from 'components/organism/UserPage/UserAddress/UserAddress';
import Menu from 'components/organism/Navbar/Navbar';
import NotFound from 'components/atoms/404/NotFound';
import Layout from 'components/organism/Layout/Layout';
import Searchbar from 'components/atoms/Searchbar/Searchbar';
// import MainTemplates from 'templates/MainTemplates';
import ErrorBoundary from 'hoc/ErrorBoundary';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';

function Root() {
  const menu = <Menu />;
  const content = (
    <Switch>
      <Route exact path={routes.home} render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />
      <Route exact path={routes.shop} component={Shop} />
      <Route exact path={routes.about} component={About} />
      <Route exact path={routes.blog} component={Blog} />
      <Route path={routes.login} component={LoginDetails} />
      <Route exact path={routes.userPage} component={UserPage} />
      <Route path={routes.userAddress} component={UserAddress} />
      <Route path={routes.userOrder} component={UserOrder} />
      <Route path={routes.bloges} component={DetailsItemBlog} />
      <Route exact path={routes.contact} component={Contact} />
      <Route exact path={routes.search} component={Searchbar} />

      <Route component={NotFound} />
    </Switch>
  );

  const footer = <Footer />;

  return (
    <Router>
      <ErrorBoundary>
        <Layout menu={menu} content={content} footer={footer} />
      </ErrorBoundary>
    </Router>
  );
}

export default Root;
