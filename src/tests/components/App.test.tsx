import React from 'react'
import { shallow } from 'enzyme'

import App from '../../App'

let wrapper: any

beforeEach(() => {
  wrapper = shallow(<App />)
})

test('Should render App correctly with default state', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render App correctly with values', () => {
  wrapper.instance().setState(() => ({
    values: [{
      id: 1,
      name: 'Value 1'
    }, {
      id: 2, 
      value: 'Value 2'
    }]
  }))

  expect(wrapper).toMatchSnapshot()
})

test('Should set default state to empty array', () => {
  const state = wrapper.instance().state
  expect(state).toStrictEqual({
    values: []
  })
})

