import React from 'react';
import Navbar from "./navbar";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>
          Home Page
        </h1>
      </div>
    );
  }
}
