import { fakeActivities, fakeValues } from '../../../tests/fixtures/seed'

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case 'http://localhost:5000/api/values':
        return Promise.resolve({ data: fakeValues })
      case 'http://localhost:5000/api/activities':
        return Promise.resolve({ data: fakeActivities })
      default:
        return Promise.resolve({data: []})
    }
  })
}