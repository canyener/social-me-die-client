import { shallow } from 'enzyme'

import ActivityListItem from '../../features/activities/dashboard/ActivityListItem'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityListItem correctly', () => {
  const wrapper = shallow(<ActivityListItem activity={fakeActivities[0]} />)

  expect(wrapper).toMatchSnapshot()
})