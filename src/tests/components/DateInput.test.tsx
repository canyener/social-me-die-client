import { shallow } from 'enzyme'
import DateInput from "../../app/common/form/DateInput"

test('Should render DateInput correctly without any given errors', () => {
  const wrapper = shallow(<DateInput
    id='test-id'
    width='11'
    placeholder='Test DateInput PlaceHolder'
    input={{
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      name:'date',
      value: new Date(2021, 11, 24, 10, 33, 30, 0)
    }}
    meta={{
      touched: false,
      error: undefined
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})

test('Should set Form.Field error to true and render Label with given error message', () => {
  const wrapper = shallow(<DateInput
    type='text'
    width='11'
    placeholder='Test DateInput PlaceHolder'
    input={{
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      name: 'date',
      value: new Date(2021, 11, 24, 10, 33, 30, 0)
    }}
    meta={{
      touched: true,
      error: 'test error message'
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})