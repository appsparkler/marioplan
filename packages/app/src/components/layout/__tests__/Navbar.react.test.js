import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../Navbar.react'

it('should render the navbar correctly', () => {
  const component = renderer.create(
      <Router>
        <Navbar />
      </Router>
  )
  const tree = component.toJSON()
  expect.assertions(1)
  expect(tree).toMatchSnapshot()
})
