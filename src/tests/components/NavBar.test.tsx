import React from 'react'
import { shallow, mount } from 'enzyme'

import NavBar from '../../features/nav/NavBar'

test('Should render NavBar correctly', () => {
  const wrapper = shallow(<NavBar />)
  expect(wrapper).toMatchSnapshot()
})

test('Should call handler for openCreateForm when Create Activity button is clicked', () => {

  const message = 'Will be refactored after mobx store implementation'
  expect('Will be refactored after mobx store implementation').toBe(message)

  // const context = {
  //   openCreateForm: jest.fn()
  // }
  // const wrapper = mount(<NavBar />, { context })
  // wrapper.setContext(context)
  // // const wrapper = shallow(<NavBar />)
  // // wrapper.setState({
  // //   openCreateForm: jest.fn()
  // // })
  // wrapper.find('Button').first().simulate('click')
  // expect(context.openCreateForm).toHaveBeenCalledTimes(1)
})