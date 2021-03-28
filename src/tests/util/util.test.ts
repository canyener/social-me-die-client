import { combineDateAndTime } from "../../app/common/util/util"

describe('#combineDateAndTime', () => {

  test('Should return correct combined date in ISO format', () => {

    const date = new Date(2020, 1, 2, 9, 9)
    const time = new Date(2000, 11, 11, 12, 12);

    const result = combineDateAndTime(date, time)
    const expected = '2020-02-02T12:12:00'

    const actualDate = result.toISOString().split('T')[0]
    const actualTime = `${result.getHours()}:${result.getMinutes()}:00`
    
    const actualCombinedDate = `${actualDate}T${actualTime}`

    expect(actualCombinedDate).toBe(expected)
  })

  test('Should return type of Date', () => {

    const date = new Date(2021, 2, 11, 12, 12)
    const time = new Date(2021, 11, 24, 11, 11)

    const result = combineDateAndTime(date, time)

    expect(result instanceof Date).toBe(true)
  })
})