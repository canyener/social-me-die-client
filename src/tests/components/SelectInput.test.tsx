import { shallow } from 'enzyme'

import SelectInput from '../../app/common/form/SelectInput'

import { fakeCategories } from '../fixtures/seed'

test('Should render SelectInput correctly without any given errors', () => {

  const wrapper = shallow(<SelectInput 
    width='11'
    placeholder='test select input placeholder'
    options={fakeCategories}
    input={{
      name:'TestSelectInputName',
      value:'TestSelectInputValue',
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn()
    }}
    meta= {{
      touched: false,
      error: undefined
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})

test('Should set Form.Field error to true and render Label with given error message', () => {
  const wrapper = shallow(<SelectInput 
    width='11'
    placeholder='test select input placeholder'
    options={fakeCategories}
    input={{
      name:'TestSelectInputName',
      value:'TestSelectInputValue',
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn()
    }}
    meta= {{
      touched: true,
      error: 'test select input error message'
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})