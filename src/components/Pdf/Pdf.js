import React, { Component } from "react";
import { Document, Page } from "react-pdf";;
import resume from "../../../content/Resume_Jan2020_BEX.pdf";
class Pdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    width: 300
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    let width = (screen.width > 600)? screen.width/2 : screen.width;
    this.setState({ numPages, width });
  };

  render() {
    const { pageNumber, numPages, width } = this.state;

    return (
      <div>
        <Document renderMode='svg' file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page width={width} key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    );
  }
}

export default Pdf;
