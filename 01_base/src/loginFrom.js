import React, {Component} from "react"

export default class LoginFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      hobby: []
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSelectChange = (e) => {
    let newArr = [...this.state.hobby]
    newArr.push(e.target.value)
    this.setState({
      hobby: newArr
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {username,password, hobby} = this.state

    console.log(username, password, hobby, hobby.length)
    if(username && password &  hobby.length > 0) {
      let arr = hobby.map(n => `${n}`)
      alert(`用户名：${username} 密码：${password} 爱好：${arr}`)
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <p className="username">
          <label htmlFor="name">用户名</label>
          <input type="text" id="name" value={this.state.username} name="username" onChange={this.handleChange} />
        </p>
        <p className="password">
          <label htmlFor="password">密码</label>
          <input type="password" id="password" value={this.state.password} name="password" onChange={this.handleChange} />
        </p>
        我的爱好：
        <select multiple value={this.state.hobby} onChange={this.handleSelectChange}>
          <option value="smoking">抽烟</option>
          <option value="drinking">喝酒</option>
          <option value="tangtou">烫头</option>
        </select>
        <br />
        <input type="submit" value="登录" />
      </form>
    )
  }
}