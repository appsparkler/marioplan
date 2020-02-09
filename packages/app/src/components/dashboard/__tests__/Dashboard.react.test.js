import React from 'react'
import renderer from 'react-test-renderer'
import Dashboard from '../Dashboard.react'
import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'
// import {BrowserRouter} from 'react-router-dom'

it('should render as expected', () => {
  const mockStore = configureMockStore()
  const store = mockStore({
    project: {
      fetchingProjects: true,
      projects: [{
        id: '1',
        title: 'Title 1',
        content: 'Content...',
      }],
    },
  })
  const component = renderer.create(
      <Provider store={store}>
        <Dashboard />
      </Provider>
  )
  const tree = component.toJSON()
  expect.assertions(1)
  expect(tree).toMatchSnapshot()
})
