import React from 'react'
import { shallow } from 'enzyme'

import { ActivityForm } from '../../features/activities/form/ActivityForm'

test('Should render ActivityForm correctly', () => {
  const wrapper = shallow(<ActivityForm setEditMode={() => {}} />)

  expect(wrapper).toMatchSnapshot()
})

test('Should call setEditMode with false when Cancel button is clicked ', () => {
  const setEditModeSpy = jest.fn()

  const wrapper = shallow(<ActivityForm setEditMode={setEditModeSpy} />)

  wrapper.find('Button').at(1).simulate('click')

  expect(setEditModeSpy).toHaveBeenCalledWith(false)
})