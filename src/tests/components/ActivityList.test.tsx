import React from 'react'
import { shallow } from 'enzyme'

import { ActivityList } from '../../features/activities/dashboard/ActivityList'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityList correctly', () => {
  const wrapper = shallow(
    <ActivityList
      activities={fakeActivities}
      selectActivity={() => { }}
      deleteActivity={() => { }}
    />)

  expect(wrapper).toMatchSnapshot()
})

test('Should call selectActivity once when button is clicked', () => {
  const selectActivitySpy = jest.fn()

  const wrapper = shallow(
    <ActivityList
      activities={fakeActivities}
      selectActivity={selectActivitySpy}
      deleteActivity={() => { }}
    />)
  wrapper.find('Button').first().simulate('click')
  expect(selectActivitySpy).toHaveBeenCalledTimes(1)
})

test('Should call deleteActivity once when delete button is clicked', () => {
  const deleteActivitySpy = jest.fn()
  const wrapper = shallow(
    <ActivityList
      activities={fakeActivities}
      selectActivity={() => { }}
      deleteActivity={deleteActivitySpy}
    />)

    wrapper.find('Button').at(1).simulate('click')
    expect(deleteActivitySpy).toHaveBeenCalledTimes(1)
})