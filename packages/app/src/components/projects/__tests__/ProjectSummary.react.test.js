import React from 'react'
import ProjectSummary from '../ProjectSummary.react'
import renderer from 'react-test-renderer'

it('should render correctly', () => {
  expect.assertions(1)
  const props = {
    project: {
      id: '1',
      title: 'Hello World',
      content: 'This is project content written in plain text...',
    },
  }
  const component = renderer.create(<ProjectSummary {...props} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
