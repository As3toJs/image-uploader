import React, { Component } from "react";
import "./App.css";
import ImageContainer from "./component/ImageContainer";

// import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <ImageContainer />
      </div>
    );
  }
}

export default App;
