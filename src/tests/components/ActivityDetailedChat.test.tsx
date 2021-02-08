import {shallow } from 'enzyme'
import ActivityDetailedChat from '../../features/activities/details/ActivityDetailedChat'

test('Should render ActivityDetailedChat correctly', () => {
  const wrapper = shallow(<ActivityDetailedChat />)

  expect(wrapper).toMatchSnapshot()
})