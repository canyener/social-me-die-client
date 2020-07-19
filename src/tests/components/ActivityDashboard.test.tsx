import React from 'react'
import { shallow } from 'enzyme'

import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityDashboard correctly', () => {
  const wrapper = shallow(<ActivityDashboard activities={fakeActivities} selectedActivity={fakeActivities[0]} selectActivity={() => {}}  />)

  expect(wrapper).toMatchSnapshot()
})