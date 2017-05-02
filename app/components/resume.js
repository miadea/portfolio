import React from 'react';
import PDF from 'react-pdf-js';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  onPageComplete(page) {
    this.setState({ page });
  }

  handlePrevious() {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext() {
    this.setState({ page: this.state.page + 1 });
  }
  render() {
    let nextButton, backButton;
    if (this.state.pages) {
      if (this.state.page != this.state.pages) nextButton = <a className="next" onClick={this.handleNext} href="#">Next <i className="fa fa-arrow-right"></i></a>;
      if (this.state.page != 1) backButton = <a className="back" onClick={this.handlePrevious} href="#"><i className="fa fa-arrow-left"></i> Back</a>;
    }
    return (
      <div className="resume-page">
        <a className="download" href="./public/resume.pdf" download >Download</a>
        <PDF className="pdf" file="./public/resume.pdf" onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
        {nextButton}
        {backButton}
      </div>
    );
  }
}
