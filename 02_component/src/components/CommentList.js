import React, { Component, PureComponent } from "react"

export default class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: []
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          { id: 1, content: 'react非常好', author: 'facebook' },
          { id: 2, content: 'vue更好', author: '尤雨溪' },
          { id: 3, content: 'angular很棒', author: 'angular' }
        ]
      })
    }, 1000)
  }
  render() {
    return (
      <>
        {this.state.comments.map((item, i) => {
          return (
            // <Comment key={item.id} data={item} />
            <Comment key={item.id} {...item} />
          )
        })}
      </>
    )
  }
}

// 方法一
// class Comment extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     // 性能优化
//     if (nextProps.data.content !== this.props.data.content) {
//       return true
//     }
//     return false
//   }
//   render() {
//     console.log('render')
//     const { id, content, author } = this.props.data
//     return (
//       <div>
//         <p>{id}</p>
//         <p>{author}</p>
//         <p>{content}</p>
//       </div>
//     )
//   }
// }

// 方法二
// PureComponent 浅层比较 比较的是值
// class Comment extends PureComponent {
//   render() {
//     console.log('render')
//     const { id, content, author } = this.props
//     return (
//       <div>
//         <p>{id}</p>
//         <p>{author}</p>
//         <p>{content}</p>
//       </div>
//     )
//   }
// }

// 方法三 高阶组件
const Comment = React.memo(({id, content, author}) => {
  console.log('render')
  
  return (
    <div>
      <p>{id}</p>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  )
})