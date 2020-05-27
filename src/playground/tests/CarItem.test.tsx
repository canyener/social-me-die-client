import React from 'react' 
import { shallow } from 'enzyme'

import { ICar } from '../cars-data'
import CarItem from '../CarItem'

test('Should render CarsItem correctly', () => {
  const car: ICar = {
    color: 'test color',
    model: 'test model',
    topSpeed: 333
  }
  const wrapper = shallow(<CarItem car={car} />)

  expect(wrapper).toMatchSnapshot()
})