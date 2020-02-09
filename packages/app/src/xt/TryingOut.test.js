import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {TrialComponent} from './TryingOut.react'
import {configure, shallow} from 'enzyme'
import renderer from 'react-test-renderer'

configure({adapter: new Adapter()})

describe('Trial Component', () => {
  it('should render correctly', () => {
    const shallowWrapper = shallow(<TrialComponent msg="hey" />)
    // renderer.create(<TrialComponent msg="hey" />).toJSON()
    // console.log(shallowWrapper.html())
    expect(shallowWrapper.html()).toMatchSnapshot()
    shallowWrapper.setProps({msg: null})
    // expect(shallowWrapper.html()).toMatchInlineSnapshot(
    //     `"<div><h1>No Message</h1></div>"`
    // )
    expect(shallowWrapper.html()).toMatchSnapshot()
    // expect(shallowWrapper.find('.icon-star').length).toBe(1)
  })
})
