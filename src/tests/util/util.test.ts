import { combineDateAndTime } from "../../app/common/util/util"

describe('#combineDateAndTime', () => {

  test('Should return correct combined date', () => {

    const date = new Date(2020, 1, 11, 12, 12)
    const time = new Date(2020, 11, 11, 10, 10)

    const actual = combineDateAndTime(date, time)
    
    expect(actual).toEqual(new Date('2020-02-11T07:10:00.000Z'))
  })

  test('Should return type of Date', () => {

    const date = new Date(2021, 2, 11, 12, 12)
    const time = new Date(2021, 11, 24, 11, 11)

    const result = combineDateAndTime(date, time)

    expect(result instanceof Date).toBe(true)
  })
})