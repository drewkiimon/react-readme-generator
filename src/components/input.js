import React, { Component } from "react";
import marked from "marked";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <form className="h-100">
        <div className="form-group h-100">
          <textarea
            className="form-control h-100"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
      </form>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default Input;
