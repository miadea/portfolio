import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import "../styles/index.less";
import Home from "./home";

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/gallery' component={Gallery} />
      </Router>
    );
  }
}


const Gallery = () => <h1>Me Gallery</h1>
