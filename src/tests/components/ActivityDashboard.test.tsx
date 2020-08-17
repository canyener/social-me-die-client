import React from 'react'
import { shallow } from 'enzyme'

import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityDashboard correctly with editMode equals to false', () => {
  const wrapper = shallow(
    <ActivityDashboard 
      activities={fakeActivities} 
      selectedActivity={fakeActivities[0]} 
      selectActivity={() => {}}
      editMode={false}
      setEditMode={() => {}}  
      setSelectedActivity = {() => {}}
      />
    )

  expect(wrapper).toMatchSnapshot()
})

test('Should render ActivityDashboard correctly with editMode equals to true', () => {
  const wrapper = shallow(
    <ActivityDashboard 
      activities={fakeActivities} 
      selectedActivity={fakeActivities[0]} 
      selectActivity={() => {}}
      editMode={true}
      setEditMode={() => {}}
      setSelectedActivity = {() => {}}
    />
  )

  expect(wrapper).toMatchSnapshot()
})

test('Should render ActivityDashboard correctly with edit mode false and selected activity is null', () => {
  const wrapper = shallow(
    <ActivityDashboard 
      activities={fakeActivities} 
      selectedActivity={null} 
      selectActivity={() => {}}
      editMode={false}
      setEditMode={() => {}}  
      setSelectedActivity = {() => {}}
    />
  )

  expect(wrapper).toMatchSnapshot()
})