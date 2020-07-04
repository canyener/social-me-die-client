import React from 'react'
import { shallow } from 'enzyme'
import { ActivityDetails } from '../../features/activities/details/ActivityDetails'

test('Should render ActivityDetails correctly', () => {
  const wrapper = shallow(<ActivityDetails />)
  
  expect(wrapper).toMatchSnapshot()
})