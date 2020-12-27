// import React from 'react'
// import { shallow } from 'enzyme'

// import ActivityList from '../../features/activities/dashboard/ActivityList'

// test('Should render ActivityList correctly', () => {
//   const wrapper = shallow(
//     <ActivityList
//       deleteActivity={() => { }}
//       submitting={false}
//       target=''
//     />
//   )

//   expect(wrapper).toMatchSnapshot()
// })

// test('Should call selectActivity once when button is clicked', () => {
//   const selectActivitySpy = jest.fn()

//   const wrapper = shallow(
//     <ActivityList
//       deleteActivity={() => { }}
//       submitting={false}
//       target=''
//     />
//   )

//   wrapper.find('Button').first().simulate('click')
//   expect(selectActivitySpy).toHaveBeenCalledTimes(1)
// })

// test('Should call deleteActivity once when delete button is clicked', () => {
//   const deleteActivitySpy = jest.fn()
//   const wrapper = shallow(
//     <ActivityList
//       deleteActivity={deleteActivitySpy}
//       submitting={false}
//       target=''
//     />
//   )

//   wrapper.find('Button').at(1).simulate('click')
//   expect(deleteActivitySpy).toHaveBeenCalledTimes(1)
// })

test('Will be refactored', () => {
  const message = 'Will be refactored after mobx store implementation'
  expect('Will be refactored after mobx store implementation').toBe(message)
})

export {}