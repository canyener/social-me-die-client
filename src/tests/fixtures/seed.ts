import { IActivity } from "../../app/models/activity"

const fakeValues = [{
  id: 1,
  name: 'Value 1'
}, {
  id: 2,
  name: 'Value 2'
}, {
  id: 3,
  name: 'Value 3'
}]

const fakeActivities: IActivity[] = [{
  id: '1',
  title: 'Fake Activity 1',
  category: 'Fake Category 1',
  city: 'Fake City',
  date: '2020-02-02T16:16:16',
  description: 'Fake description',
  venue: 'Fake Venue'
}, {
  id: '2',
  title: 'Fake Activity 2',
  category: 'Fake Category 2',
  city: 'Fake City 2',
  date: '2020-02-02T16:16:16',
  description: 'Fake description 2',
  venue: 'Fake Venue 2'
}]

export { fakeValues, fakeActivities }