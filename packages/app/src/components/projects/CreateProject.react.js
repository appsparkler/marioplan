import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/project'
import cardify from '../materialize/Cardify.react'
import containerify from '../materialize/Containerify.react'

export class CreateProject extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.createProject(this.state)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="white">
        <h4 className="grey-text text-darken-3">Create new project</h4>
        <div className="input-field">
          <label htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            onChange={this.handleChange.bind(this)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">
            Content
          </label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={this.handleChange.bind(this)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" type="submit">
            Create
          </button>
        </div>
      </form>
    )
  }
}

export default containerify(cardify(
    connect(null, {createProject})(CreateProject)
))
