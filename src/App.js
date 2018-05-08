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
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-md-6 h-100 bg-success box-border ">
            <Input onSearchTermChange={helper} />
          </div>
          <div id="output" className="col-md-6 h-100 bg-danger box-border " />
        </div>
      </div>
    );
  }
}

export default App;
