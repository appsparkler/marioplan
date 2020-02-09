import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import renderer from 'react-test-renderer'
import SignedOutLinks from '../SignedOutLinks.react'

it('should render correctly', () => {
  expect.assertions(1)
  const component = renderer.create(
      <Router>
        <SignedOutLinks />
      </Router>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
