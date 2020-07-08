import React from 'react'
import { shallow } from 'enzyme'

import { ActivityDetails } from '../../features/activities/details/ActivityDetails'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityDetails correctly', () => {
  const wrapper = shallow(<ActivityDetails activity={fakeActivities[0]} />)
  
  expect(wrapper).toMatchSnapshot()
})