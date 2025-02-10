import React, { Component } from "react"

class SubCount extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("子组件接受父组件传递的属性",nextProps)
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default class LifyCycle extends Component {
  static defaultProps = {
    name: "chales"
  }

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log("1、初始化加载默认状态")
  }
  componentWillMount() {
    console.log("2、组件将要挂载")
  }
  componentDidMount() {
    console.log("4、组件挂载完成")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5、组件是否需要更新")

    if(nextState.count % 2 === 0) {
      return true 
    }
    return false
  }
  componentWillUpdate() {
    console.log("6、组件将要更新")
  }
  componentDidUpdate() {
    console.log("7、组件更新完成")
  }
  componentWillUnmount(){
    console.log('组件卸载完成')
  }

  handleClick = () => {
    this.setState((prevState)=> {
      return {
        count: prevState.count += 1
      }
    }, () => {
      // console.log(this.state.count)
    })
  }
  render() {
    console.log("3、组件render")
    return (
      <div>
        <h1>当前的值：{this.state.count}</h1>
        <button onClick={this.handleClick}>+</button>
        <SubCount count={this.state.count}></SubCount>
      </div>
    )
  }

}