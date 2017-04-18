import React from 'react';
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="link"><Link to='/'>Home</Link></div>
        <div className="link"><Link to='/about'>About</Link></div>
        <div className="link"><Link to='/gallery'>Gallery</Link></div>
        <div className="link"><Link to='/resume'>Resume</Link></div>
        <div className="link"><Link to='/contact'>Contact</Link></div>
      </div>
    );
  }
}
