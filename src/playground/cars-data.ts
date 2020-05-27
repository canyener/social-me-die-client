export interface ICar {
  color: string,
  model: string,
  topSpeed?:number
}

const car1: ICar = {
  color: 'blue',
  model: 'BMW',
}

const car2: ICar = {
  color: 'red',
  model: 'Mercedes',
  topSpeed: 100
}

export const cars = [car1, car2]