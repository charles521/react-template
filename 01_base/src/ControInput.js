import React, { Component } from "react";

// 受控组件：受状态控制的组件，需要与状态进行相应的绑定
export default class ControInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      data: []
    }
  }

  handleChange = (e) => {
    this.setState({
      val: e.target.value
    })
  }

  handleClick = () => {
    if(this.state.val) {
      let newData = [...this.state.data]

      this.setState({
        data: [...newData, this.state.val],
        val: ''
      })
    }
  }


  render() {
    return (
      <div>
        <input type="text" value={this.state.val} onChange={this.handleChange} />
        <button onClick={this.handleClick}>添加数据</button>
        <ul>
          {
            this.state.data && this.state.data.map((item, i) => {
              return <li key={i}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}