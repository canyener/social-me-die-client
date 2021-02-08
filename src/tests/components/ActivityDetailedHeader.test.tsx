import { shallow } from 'enzyme'
import ActivityDetailedHeader from '../../features/activities/details/ActivityDetailedHeader'
import { fakeActivities } from '../fixtures/seed'

test('Should render ActivityDetailedHeader correctly', () => {
  const wrapper = shallow(<ActivityDetailedHeader activity={fakeActivities[0]} />)

  expect(wrapper).toMatchSnapshot()
})