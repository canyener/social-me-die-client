import React from 'react'
import { shallow } from 'enzyme'

import App from '../../App'

test('Should render App correctly', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot()
})