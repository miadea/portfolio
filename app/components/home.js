import React from 'react';
import { Link } from 'react-router'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        hellow world
        <Link to='/gallery'>Twitter Feed</Link>
      </div>
    );
  }
}
