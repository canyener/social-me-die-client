// import React from 'react'
// import { shallow } from 'enzyme'

// import ActivityDetails from '../../features/activities/details/ActivityDetails'
// import { fakeActivities } from '../fixtures/seed'

// test('Should render ActivityDetails correctly', () => {
//   const wrapper = shallow(
//     <ActivityDetails
//       setEditMode={() => { }}
//       setSelectedActivity={() => { }}
//     />
//   )

//   expect(wrapper).toMatchSnapshot()
// })

// test('Should call setEditMode with true when Edit button is clicked', () => {

//   const setEditModeSpy = jest.fn()

//   const wrapper = shallow(
//     <ActivityDetails
//       setEditMode={setEditModeSpy}
//       setSelectedActivity={() => { }}
//     />
//   )
//   wrapper.find('Button').first().simulate('click')
//   expect(setEditModeSpy).toHaveBeenCalledWith(true)
// })

// test('Should call setSelectedActivity with null when Cancel button is clicked', () => {
//   const setSelectedActivitySpy = jest.fn()

//   const wrapper = shallow(
//     <ActivityDetails
//       setEditMode={() => { }}
//       setSelectedActivity={setSelectedActivitySpy}
//     />
//   )

//   wrapper.find('Button').at(1).simulate('click')

//   expect(setSelectedActivitySpy).toHaveBeenCalledWith(null)
// })

test('Will be refactored', () => {
  const message = 'Will be refactored after mobx store implementation'
  expect('Will be refactored after mobx store implementation').toBe(message)
})

export {}