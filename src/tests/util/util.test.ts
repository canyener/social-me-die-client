import { combineDateAndTime } from "../../app/common/util/util"

describe('#combineDateAndTime', () => {

  test('Should return correct combined date', () => {

    const date = new Date(2020, 9, 10, 9, 9)

    const time = new Date(2000, 1, 2, 12, 12);

    const result = combineDateAndTime(date, time)

    const expected = '2020-10-10T12:12:00'
    const actual = `${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}T${result.getHours()}:${result.getMinutes()}:00`

    expect(actual).toBe(expected)
  })

  test('Should return type of Date', () => {

    const date = new Date(2021, 2, 11, 12, 12)
    const time = new Date(2021, 11, 24, 11, 11)

    const result = combineDateAndTime(date, time)

    expect(result instanceof Date).toBe(true)
  })
})