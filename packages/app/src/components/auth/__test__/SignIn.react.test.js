import React from 'react'
import {SignIn} from '../SignIn.react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, {shallow} from 'enzyme'

Enzyme.configure({adapter: new Adapter()})

it('should render correctly', ()=> {
  expect.assertions(1)

  const component = renderer.create(<SignIn />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

it('update the state on input in email-field in form', ()=> {
  const component = shallow(<SignIn />)
  const emailInput = component.find('input#email')
  const CHANGED_VALUE = 'abc@def.com'
  emailInput.simulate('change', {
    target: {
      value: CHANGED_VALUE,
      id: 'email',
    },
  })
  expect(component.state().email).toEqual(CHANGED_VALUE)
})

it('update the state on-change in password field in sign-in-form', ()=> {
  const component = shallow(<SignIn />)
  const emailInput = component.find('input#password')
  const CHANGED_VALUE = 'jalksdjflkajdsf'
  emailInput.simulate('change', {
    target: {
      value: CHANGED_VALUE,
      id: 'password',
    },
  })
  expect(component.state().password).toEqual(CHANGED_VALUE)
})

it(`preventDefault and stopPropagation
    events to have been called on form-submit`, ()=> {
  expect.assertions(2)
  const component = shallow(<SignIn />)
  const emailInput = component.find('form')
  const preventDefault = jest.fn()
  const stopPropagation = jest.fn()
  emailInput.simulate('submit', {
    preventDefault: preventDefault,
    stopPropagation: stopPropagation,
  })
  expect(preventDefault).toHaveBeenCalledTimes(1)
  expect(stopPropagation).toHaveBeenCalledTimes(1)
})
