import { shallow } from 'enzyme'
import TextAreaInput from '../../app/common/form/TextAreaInput'

test('Should render TextAreaInput correctly without any given errors', () => {
  const wrapper = shallow(<TextAreaInput
    width='11'
    placeholder='Test TextArea Placeholder'
    rows={3}
    input={{
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      name: 'Test textarea name',
      value: 'Test textarea value'
    }}
    meta={{
      touched: false,
      error: undefined
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})

test('Should set Form.Field error to true and render Label with given error message', () => {
  const wrapper = shallow(<TextAreaInput
    width='11'
    placeholder='Test TextAreaPlaceholder'
    rows={3}
    input={{
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      name: 'Test textarea name',
      value: 'Test textarea value'
    }}
    meta={{
      touched: true,
      error: 'test error message'
    }}
  />)

  expect(wrapper).toMatchSnapshot()
})