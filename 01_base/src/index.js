import React, { Component } from "react";
import ReactDOM from "react-dom"

// ReactDOM.render(
//   <h1>Hello, {'app'}</h1>,
//   document.getElementById('root')
// );

const arr = [1,2,3]
const ulElm = <ul>{arr.map(item => <li key={item}>{item}</li>)}</ul>

const goods = [
  {id: 1, name: 'apple', price: 5},
  {id: 2, name: 'banana', price: 3},
  {id: 3, name: 'orange', price: 2},
  {id: 4, name: 'watermelon', price: 7}
]

const filterGoodsElm = <ul>
  { goods.map((good, index) => {
    return (good.price < 5?<li key={index}>{good.name}</li>: null)
  })}
</ul>

// props&组件
// 函数式组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// 类组件
class App extends Component {
  constructor (props) {
    super(props)

    this.user = {
      avatarUrl: 'https://avatars.githubusercontent.com/u/1022040?v=4',
      name: 'chales',
      content: '测试react组件',
      time: new Date().toLocaleDateString()
    }
  }
  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
      <MyBtn name="提交" />
      <MyBtn name="取消" />
    </div>
  }
}

class MyBtn extends Component {
  render() {
    return <button>{this.props.name}</button>
  }
}


ReactDOM.render(
  <App name="你好" />,
  document.getElementById('root')
)