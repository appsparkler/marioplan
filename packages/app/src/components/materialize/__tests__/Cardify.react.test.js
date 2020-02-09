import React, {Component} from 'react'
import cardify from '../Cardify.react'
import renderer from 'react-test-renderer'
// import {configure, shallow} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// configure({adapter: new Adapter()})

it('should correctly cardify a component', () => {
  class TestComponent extends Component {
    render() {
      return (
        <div>Test Component for cardify hoc component</div>
      )
    }
  }
  const CardifiedComponent = cardify(TestComponent)
  // const wrapper = shallow(<CardifiedComponent />)
  const wrapper = renderer.create(<CardifiedComponent />)
  const tree = wrapper.toJSON()
  expect(tree).toMatchSnapshot()
})
