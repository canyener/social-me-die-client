import React from 'react'

import { cars } from '././cars-data'
import CarItem from './CarItem'

const Cars = () => (
  <div>
    <ul>
      {cars.map((car) => <CarItem key={car.model} car={car} /> )}
    </ul>
  </div>
)

export default Cars