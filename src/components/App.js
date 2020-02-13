import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  state = {
    pageHeader: "Naming Contests"
  }  
  
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <p>Paragraph!</p>
      </div>
    );
  }
}

export default App;
