import React from 'react'
import { shallow } from 'enzyme'

import LoadingComponent from '../../app/layout/LoadingComponent'

test('Should render LoadingComponent correctly with given inverted and content props', () => {
  const wrapper = shallow(
    <LoadingComponent 
      inverted={false}
      content="Loading stuff"
    />
  )

  expect(wrapper).toMatchSnapshot()
})

test('Should render LoadingComponent with inverted as true and no content without any given props', () => {
  const wrapper = shallow(
    <LoadingComponent />
  )

  expect(wrapper).toMatchSnapshot()
})