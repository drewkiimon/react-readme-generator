import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    // console.log(this.state.term);
    this.props.onSearchTermChange(term);
  }
}

export default Input;
