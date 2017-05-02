import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {ready: false}
  }
  componentDidMount() {
    let self = this;
    setTimeout(() => {
      self.setState({ready: true})
    }, 100);

  }
  render() {
    return (
      <div className="home-page">
        <div className="name">
          <h1 className={ this.state.ready ? "title" : null}>Emma Stoumen</h1>
        </div>
      </div>
    );
  }
}
