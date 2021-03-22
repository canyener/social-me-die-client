import { combineDateAndTime } from "../../app/common/util/util"
import { register } from 'timezone-mock'

describe('#combineDateAndTime', () => {

  test('Should return correct combined date', () => {

    const date = new Date(2021, 2, 11, 12, 12)
    const time = new Date(2021, 11, 24, 11, 11)

    const result = combineDateAndTime(date, time)

    const dateText = result.toLocaleDateString('tr-TR', { timeZone: 'Europe/London' })
    const timeText = result.toLocaleTimeString('tr-TR', { timeZone: 'Europe/London' })

    const actual = `${dateText} ${timeText}`

    expect(actual).toBe('11.03.2021 08:11:00')
  })

  test('Should return type of Date', () => {

    const date = new Date(2021, 2, 11, 12, 12)
    const time = new Date(2021, 11, 24, 11, 11)

    const result = combineDateAndTime(date, time)

    expect(result instanceof Date).toBe(true)
  })
})