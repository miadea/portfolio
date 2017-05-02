import React from 'react';

export default class Contact extends React.Component {
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
    let ready;
    if (this.state.ready) ready = 'ready'
    return (
      <div className="contact-page">
        <h1>
          Contact Me
        </h1>
        <div className="contact">
      		<div className="contact-form">
      			<form action="mailto:stoumene@appstate.edu" method="post" name="contact">
      				<input type="text" name="Name" placeholder="Name" className={ready}/>
      				<input type="email" name="Email" placeholder="Email" className={ready}/>
      				<textarea name="Message" placeholder="Message" className={ready}></textarea>
              <input type="submit" value="Send" className={ready}/>
              {/* {ready ? null : <div onClick={() => this.setState({ready: true})} className='button'>contact?</div>} */}
      			</form>
      		</div>
      	</div>
      </div>
    );
  }
}
