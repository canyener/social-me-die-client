import { shallow } from 'enzyme'

import ActivityDetailedSidebar from '../../features/activities/details/ActivityDetailedSidebar'

 test('Should render ActivityDetailedSidebar correctly', () => {
   const wrapper = shallow(<ActivityDetailedSidebar />)

   expect(wrapper).toMatchSnapshot()
 })