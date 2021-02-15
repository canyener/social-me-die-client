import { shallow } from 'enzyme'
import TextInput from '../../app/common/form/TextInput'

test('Should render TextInput correctly without any given errors', () => {

  const wrapper = shallow(<TextInput
    type='text'
    width='11'
    placeholder='Test Input PlaceHolder'
    input={{
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      name: 'Test input name',
      value: 'Test input value'
    }}
    meta={{
      touched: false,
      error: undefined
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})

test('Should set Form.Field error to true and render Label with given error message', () => {
  const wrapper = shallow(<TextInput
    type='text'
    width='11'
    placeholder='Test Input PlaceHolder'
    input={{
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      name: 'Test input name',
      value: 'Test input value'
    }}
    meta={{
      touched: true,
      error: 'test error message'
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})