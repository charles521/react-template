// 组件之间的组合使用
import  { Component } from 'react'
import { Button } from 'antd'

export default class Compond extends Component {

  render() {
    return (
      <>
        <WelcomeDialog />
        <ThanksDialog />
      </>
    )
  }
}

const Dialog = (props) => {
  return (
    <div style={{border: `3px solid ${props.color || 'blue'}`}}>
      {/* 类似于 vue 匿名插槽 */}
      {props.children}

      <div>
        {/* 类似于vue具名插槽 */}
        { props.btn }
      </div>
    </div>
  )
}

const WelcomeDialog = () => {
  const btn = <Button>欢迎</Button>
  return (
    <Dialog color='red' btn={btn}>
      <h1>欢迎光临</h1>
      <p>welcome</p>
    </Dialog>
  )
}
const ThanksDialog = () => {
  const btn = <Button type="primary">谢谢</Button>
  return (
    <Dialog btn={btn}>
      <h1>谢谢您</h1>
      <p>thanks</p>
    </Dialog>
  )
}

