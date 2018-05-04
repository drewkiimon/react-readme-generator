import React, { Component } from "react";
import Input from "./components/input";
import Output from "./components/output";
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
    // console.log(`This is it: ${term}`);
  }

  render() {
    const helper = term => {
      this.helper(term);
    };
    console.log(marked("# Marked in browser\n\nRendered by **marked**."));
    return (
      <div>
        <Input onSearchTermChange={helper} />
        <Output markedUp={this.state.unmarked} />
        <div id="huh" />
      </div>
    );
  }
}

export default App;
