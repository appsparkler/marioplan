import React from 'react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from '../App.react'

it('should render the expected HTML', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore({
    project: {
      projects: [{
        id: '1',
        title: 'Title 1',
        content: 'Content...',
      }],
    },
  })
  const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
