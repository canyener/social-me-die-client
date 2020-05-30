import { fakeValues } from '../fixtures/seed'

module.exports = {
  get: jest.fn(() => {
    return Promise.resolve({ data: fakeValues })
  })
}