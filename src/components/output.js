import React, { Component } from "react";
import ReactDOM from "react-dom";
import marked from "marked";

class Output extends Component {
  // Process the markedUp and insert it
  render() {
    return <div id="here">{marked(this.props.markedUp)}</div>;
  }
}

export default Output;
