import React from 'react'
import { shallow } from 'enzyme'

import App from '../../App'

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

test('Should render App correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render App correctly with data', async () => {
  const wrapper = shallow(<App />)
  await flushPromises()
  wrapper.update()
  expect(wrapper).toMatchSnapshot()
})
