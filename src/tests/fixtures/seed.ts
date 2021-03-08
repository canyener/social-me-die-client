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
  date: new Date(2021, 11, 24, 10, 33, 30, 0),
  description: 'Fake description',
  venue: 'Fake Venue'
}, {
  id: '2',
  title: 'Fake Activity 2',
  category: 'Fake Category 2',
  city: 'Fake City 2',
  date: null,
  description: 'Fake description 2',
  venue: 'Fake Venue 2'
}]

const fakeCategories = [
  { key: 'fakeCategoryOption1', text: 'Fake Category Option 1', value: 'fakeCategoryOption1' },
  { key: 'fakeCategoryOption2', text: 'Fake Category Option 2', value: 'fakeCategoryOption2' },
  { key: 'fakeCategoryOption3', text: 'Fake Category Option 3', value: 'fakeCategoryOption3' }
]

export { fakeValues, fakeActivities, fakeCategories }