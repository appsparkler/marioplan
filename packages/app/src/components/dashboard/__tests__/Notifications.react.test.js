import React from 'react'
import renderer from 'react-test-renderer'
import Notifications from '../Notifications.react'

it('should render correctly', ()=> {
  const component = renderer.create(<Notifications />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
