import React from 'react'
import {CreateProject} from '../CreateProject.react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from 'enzyme'

configure({adapter: new Adapter()})

it('should render correctly', ()=> {
  expect.assertions(1)

  const component = renderer.create(<CreateProject />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

it('should update the state on input in title-field in form', ()=> {
  const component = shallow(
      <CreateProject />
  )
  const titleInputField = component.find('input#title')
  const CHANGED_VALUE = 'This is a new project'
  titleInputField.simulate('change', {
    target: {
      value: CHANGED_VALUE,
      id: 'title',
    },
  })
  expect(component.state().title).toEqual(CHANGED_VALUE)
})

it(`should update the state on change in the content text-area`, ()=> {
  const component = shallow(<CreateProject />)
  const contentTextArea = component.find('textarea#content')
  const CHANGED_VALUE = 'Some new content....'
  contentTextArea.simulate('change', {
    target: {
      value: CHANGED_VALUE,
      id: 'content',
    },
  })
  expect(component.state().content).toEqual(CHANGED_VALUE)
})

it(`preventDefault and stopPropagation
    events to have been called on form-submit`, ()=> {
  expect.assertions(3)
  const props = {
    createProject: jest.fn(),
  }
  const component = shallow(<CreateProject {...props} />)
  const emailInput = component.find('form')
  const preventDefault = jest.fn()
  const stopPropagation = jest.fn()
  emailInput.simulate('submit', {
    preventDefault: preventDefault,
    stopPropagation: stopPropagation,
  })
  expect(preventDefault).toHaveBeenCalledTimes(1)
  expect(stopPropagation).toHaveBeenCalledTimes(1)
  expect(props.createProject).toHaveBeenCalledTimes(1)
})
