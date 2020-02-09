import React, {Component} from 'react'
import Title from '../materialize/Title.react'
import cardify from '../materialize/Cardify.react'
import containerify from '../materialize/Containerify.react'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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
      <form onSubmit={this.handleSubmit.bind(this)} className="white">
        <Title title="Sign Up"/>
        <div className="input-field">
          <label htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            onChange={this.handleChange.bind(this)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">
        Password
          </label>
          <input
            id="password"
            type="password"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">
        First Name
          </label>
          <input
            id="firstName"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">
        Last Name
          </label>
          <input
            id="lastName"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" type="submit">
        SignUp
          </button>
        </div>
      </form>
    )
  }
}

export default containerify(cardify(SignUp))
