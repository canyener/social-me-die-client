import React from 'react'
import { shallow } from 'enzyme'

import { ActivityList } from '../../features/activities/dashboard/ActivityList'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityList correctly', () => {
  const wrapper = shallow(<ActivityList activities={fakeActivities} />)

  expect(wrapper).toMatchSnapshot()
})