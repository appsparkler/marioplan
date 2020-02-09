import React, {Component} from 'react'
import Title from '../materialize/Title.react'
import cardify from '../materialize/Cardify.react'
import containerify from '../materialize/Containerify.react'

export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    // console.log(this.state)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Title title="Login" />
        <div className="input-field">
          <label htmlFor="email">
                      Email
          </label>
          <input
            className="pink-text"
            id="email"
            type="email"
            onChange={this.handleChange.bind(this)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">
                      Password
          </label>
          <input
            className="pink-text"
            id="password"
            type="password"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" type="submit">
                      Login
          </button>
        </div>
      </form>
    )
  }
}

export default containerify(cardify(SignIn))
