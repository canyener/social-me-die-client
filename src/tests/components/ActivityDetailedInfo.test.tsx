import { shallow } from 'enzyme'

import ActivityDetailedInfo from '../../features/activities/details/ActivityDetailedInfo'

import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityDetailedInfo, correctly', () => {
  const wrapper = shallow(<ActivityDetailedInfo activity={fakeActivities[0]} />)

  expect(wrapper).toMatchSnapshot()
})