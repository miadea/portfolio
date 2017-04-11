import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "../styles/index.less";
import Home from "./home";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
        </div>
      </BrowserRouter>
    );
  }
}


const Gallery = () => <h1>Me Gallery</h1>
