import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  typedText(e){
    this.setState({text: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <input onChange = {e =>this.typedText(e)} type='text'/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
