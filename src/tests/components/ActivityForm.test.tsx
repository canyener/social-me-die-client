import React from 'react'
import { shallow } from 'enzyme'

import { ActivityForm } from '../../features/activities/form/ActivityForm'

test('Should render ActivityForm correctly', () => {
  const wrapper = shallow(<ActivityForm />)

  expect(wrapper).toMatchSnapshot()
})