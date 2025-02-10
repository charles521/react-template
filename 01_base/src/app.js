import React, {Component} from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  }

  add(e) {
    this.setState((prevState) => {
      return {
        count: prevState.count += 1
      }
    }, () => {
      console.log(this.state.count)
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={(e) => {this.add(e)}}>+</button>
      </div>
    )
  }
}


