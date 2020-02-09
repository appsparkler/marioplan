import React from 'react'
import {Provider} from 'react-redux'
import ProjectDetails, {
  fetchProjectEffect,
  FetchedProjectCard, CardLoader,
  GetComponentJSX,
} from '../ProjectDetails.react'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from 'enzyme'
configure({adapter: new Adapter()})
const mockStore = configureMockStore([thunk])
const props = {
  match: {
    params: {
      id: 3,
    },
  },
}
const store = mockStore({
  project: {
    fetchingProject: true,
    fetchedProject: {
      id: 1,
      title: 'Title 1',
      content: 'Content for project 1',
    },
  },
})


it('fetch-project-effect', () => {
  const dispatch = jest.fn()
  const props = {
    match: {
      params: {
        id: 2,
      },
    },
  }
  fetchProjectEffect({dispatch, props})
  expect(dispatch).toHaveBeenCalled()
})

it('should correctly render CardLoader', () => {
  const component = renderer.create(<CardLoader />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should correctly render FetchProjectCard', () => {
  const fetchedProject = {
    id: 1,
    title: 'Title 1',
    content: 'Content for project 1',
  }
  const component = renderer.create(
      <FetchedProjectCard
        fetchedProject={fetchedProject}
      />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should correctly render Project Details component', () => {
  const component = renderer.create(
      <Provider store={store}>
        <ProjectDetails {...props} />
      </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render the loader when data is being fetched...', () => {
  store.dispatch({type: 'FETCH_PROJECT_STARTED'})
  const props = {
    match: {
      params: {
        id: 3,
      },
    },
  }
  const component = shallow(
      <Provider store={store}>
        <ProjectDetails {...props} />
      </Provider>
  )
  expect(component.html()).toMatchSnapshot()
})

it('getComponentJSX should conditionally render', () => {
  const wrapper = shallow(<GetComponentJSX
    fetchingProject={true} />
  )
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.setProps({
    fetchingProject: false,
    fetchedProject: {
      id: 1,
      title: 'Title 1',
      content: 'Content for project 1',
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
