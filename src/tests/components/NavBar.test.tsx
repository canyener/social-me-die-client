import React from 'react'
import { shallow, mount } from 'enzyme'

import { NavBar } from '../../features/nav/NavBar'
import App from '../../app/layout/App'

test('Should render NavBar correctly', () => {
  const wrapper = shallow(<NavBar openCreateForm={()=> {}} />)

  expect(wrapper).toMatchSnapshot()
})

test('Should call handler for openCreateForm when Create Activity button is clicked', () => {

  const openCreateFormSpy = jest.fn()
  
  const wrapper = shallow(<NavBar openCreateForm={openCreateFormSpy} />)
  wrapper.find('Button').first().simulate('click')
  expect(openCreateFormSpy).toHaveBeenCalledTimes(1)
})