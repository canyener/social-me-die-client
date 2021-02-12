import { shallow } from 'enzyme'
import NotFound from '../../app/layout/NotFound'

test('Should render NotFound correctly', () => {
  const wrapper = shallow(<NotFound />)

  expect(wrapper).toMatchSnapshot()
})