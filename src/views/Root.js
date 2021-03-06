import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import MainTemplate from '../theme/MainTemplate';
import Navbar from '../components/molecules/Navbar/Navbar';

const Root = () => (
  <Router>
    <MainTemplate>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
