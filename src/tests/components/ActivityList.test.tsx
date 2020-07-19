import React from 'react'
import { shallow, mount } from 'enzyme'

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


// test('useStateTest', () => {
//   const setState = jest.fn()
//   const useStateMock: any = (initialState: any) => [initialState, setState]

//   jest.spyOn(React, 'useState').mockImplementation(useStateMock)

//   //how to trigger useState handler function here?

//   const wrapper = mount(<ActivityList activities={fakeActivities} selectActivity={() => { }}/>)

//   wrapper.find('Button').first().simulate('click')

//   wrapper.update()

//   expect(setState).toHaveBeenCalledTimes(1)
// })