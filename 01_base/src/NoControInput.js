import React, {Component} from "react";

// 不受状态的控制
export default class NoControInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      val: ''
    }
  }

  handleChange = () => {
    let val = this.refs.input.value
    this.setState({val})
  }

  render() {
    return(
      <div>
        <input ref="input" type="text" value={this.state.val} onChange={this.handleChange} />
        <h2>{this.state.val}</h2>
      </div>
    )
  }
}