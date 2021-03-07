import { shallow } from 'enzyme'

import NavBar from '../../features/nav/NavBar'

test('Should render NavBar correctly', () => {
  const wrapper = shallow(<NavBar />)
  expect(wrapper).toMatchSnapshot()
})
