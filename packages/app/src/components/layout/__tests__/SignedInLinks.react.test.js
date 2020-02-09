import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import renderer from 'react-test-renderer'
import SignedInLinks from '../SignedInLinks.react'

it('should render correctly', () => {
  expect.assertions(1)
  const component = renderer.create(
      <Router>
        <SignedInLinks />
      </Router>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
