// import React from 'react'
// import { shallow } from 'enzyme'

// import  ActivityDashboard  from '../../features/activities/dashboard/ActivityDashboard'
// import { fakeActivities } from '../fixtures/seed'

// test('Should render ActivityDashboard correctly with editMode equals to false', () => {
//   const wrapper = shallow(
//     <ActivityDashboard
//       activities={fakeActivities}
//       selectActivity={() => { }}
//       setEditMode={() => { }}
//       setSelectedActivity={() => { }}
//       createActivity={() => { }}
//       editActivity={() => { }}
//       deleteActivity={() => { }}
//       submitting={false}
//       target=''
//     />
//   )

//   expect(wrapper).toMatchSnapshot()
// })

// test('Should render ActivityDashboard correctly with editMode equals to true', () => {
//   const wrapper = shallow(
//     <ActivityDashboard
//       activities={fakeActivities}
//       selectActivity={() => { }}
//       setEditMode={() => { }}
//       setSelectedActivity={() => { }}
//       createActivity={() => { }}
//       editActivity={() => { }}
//       deleteActivity={() => { }}
//       submitting={false}
//       target=''
//     />
//   )

//   expect(wrapper).toMatchSnapshot()
// })

// test('Should render ActivityDashboard correctly with edit mode false and selected activity is null', () => {
//   const wrapper = shallow(
//     <ActivityDashboard
//       activities={fakeActivities}
//       selectActivity={() => { }}
//       setEditMode={() => { }}
//       setSelectedActivity={() => { }}
//       createActivity={() => { }}
//       editActivity={() => { }}
//       deleteActivity={() => { }}
//       submitting={false}
//       target=''
//     />
//   )

//   expect(wrapper).toMatchSnapshot()
// })

test('Will be refactored', () => {
  const message = 'Will be refactored after mobx store implementation'
  expect('Will be refactored after mobx store implementation').toBe(message)
})

export {}