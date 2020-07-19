import React from 'react'
import { shallow } from 'enzyme'

import { ActivityList } from '../../features/activities/dashboard/ActivityList'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityList correctly', () => {
  const wrapper = shallow(<ActivityList activities={fakeActivities} selectActivity={() => {}} />)

  expect(wrapper).toMatchSnapshot()
})

test('Should call selectActivity once when button is clicked', () => {
  const selectActivitySpy = jest.fn()

  const wrapper = shallow(<ActivityList activities={fakeActivities} selectActivity={selectActivitySpy} />)
  wrapper.find('Button').first().simulate('click')
  expect(selectActivitySpy).toHaveBeenCalledTimes(1)
})