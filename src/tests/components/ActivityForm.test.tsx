import React from 'react'
import { shallow } from 'enzyme'

import { fakeActivities } from '../fixtures/seed'
import { ActivityForm } from '../../features/activities/form/ActivityForm'

test('Should render ActivityForm correctly when activity prop is null', () => {

  const wrapper = shallow(<ActivityForm setEditMode={() => {}} activity={null} />)

  expect(wrapper).toMatchSnapshot()
})

test('Should render ActivityForm correctly with given activity', () => {
  const wrapper = shallow(<ActivityForm setEditMode={() => {}} activity={fakeActivities[0]} />)
  
  expect(wrapper).toMatchSnapshot()
})

test('Should call setEditMode with false when Cancel button is clicked ', () => {
  const setEditModeSpy = jest.fn()

  const wrapper = shallow(<ActivityForm setEditMode={setEditModeSpy} activity={fakeActivities[0]} />)

  wrapper.find('Button').at(1).simulate('click')

  expect(setEditModeSpy).toHaveBeenCalledWith(false)
})