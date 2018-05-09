import React, { Component } from "react";
import Input from "./components/input";
import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unmarked: ""
    };
  }

  helper(term) {
    this.setState({ unmarked: term });
    document.getElementById("output").innerHTML = marked(term);
  }

  render() {
    const helper = term => {
      this.helper(term);
    };
    return (
      <div className="container-fluid h-100 my-auto">
        <div className="row h-100">
          <div id="input" className="col-md-5 offset-md-1 h-75 ">
            <Input onSearchTermChange={helper} />
          </div>
          <div id="output" className="col-md-5 h-75" />
        </div>
      </div>
    );
  }
}

export default App;
