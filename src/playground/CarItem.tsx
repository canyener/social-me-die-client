import React, { FC } from 'react'

import { ICar } from './cars-data'

interface IProps {
  car: ICar
}

const CarItem: FC<IProps> = ({ car }) => {
  return (
    <div>
      <h1>{car.color}</h1>
    </div>
  )
}

export default CarItem