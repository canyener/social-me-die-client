import React from 'react'
import { shallow } from 'enzyme' 

import Cars from '../Cars'

test('Should render Cars correctly', () => {
  const wrapper = shallow(<Cars />)

  expect(wrapper).toMatchSnapshot()
})