import { shallow } from 'enzyme'
import HomePage from '../../features/home/HomePage'


test('Should render Homepage correctly', () => {
  const wrapper = shallow(<HomePage />)
  expect(wrapper).toMatchSnapshot()
})