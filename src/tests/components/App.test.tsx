import { shallow } from "enzyme"

import App from '../../app/layout/App'

test('Should render App correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
