import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import "../styles/index.less";

import Navbar from "./navbar";
import Footer from "./footer";

import Home from "./home";
import About from "./about";
import Gallery from "./gallery";
import Resume from "./resume";
import Contact from "./contact";

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Layout} >
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Route>
      </Router>
    );
  }
}

class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
