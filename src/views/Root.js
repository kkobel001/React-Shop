import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import Navbar from '../components/molecules/Navbar/Navbar';
import Footer from '../components/molecules/Footer/Footer';
// import '../theme/globalStyle.scss';

const Root = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </Router>
);

export default Root;
