import { shallow } from 'enzyme'
import { register } from 'timezone-mock'

import DateInput from "../../app/common/form/DateInput"

beforeEach(() => {
  register('Europe/London')
})

describe('Date Picker Tests', () => {
  test('Should render DateInput Date Picker correctly without any given errors', () => {

    const wrapper = shallow(<DateInput
      id='test-id'
      width='11'
      placeholder='Test DateInput PlaceHolder'
      date={true}
      time={false}
      input={{
        onBlur: jest.fn(),
        onChange: jest.fn(),
        onFocus: jest.fn(),
        name: 'date',
        value: new Date(2021, 11, 24, 10, 33, 30, 0)
      }}
      meta={{
        touched: false,
        error: undefined
      }}
    />)
  
    expect(wrapper).toMatchSnapshot()
  })
  
  test('Should set Date Picker Form.Field error to true and render Label with given error message', () => {
    const wrapper = shallow(<DateInput
      type='text'
      width='11'
      date={true}
      time={false}
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
})

describe('Time Picker Tests', () => {
  test('Should render DateInput Time Picker correctly without any given errors', () => {

    const wrapper = shallow(<DateInput
      id='test-id'
      width='11'
      placeholder='Test DateInput PlaceHolder'
      date={false}
      time={true}
      input={{
        onBlur: jest.fn(),
        onChange: jest.fn(),
        onFocus: jest.fn(),
        name: 'time',
        value: new Date(2021, 11, 24, 10, 33, 30, 0)
      }}
      meta={{
        touched: false,
        error: undefined
      }}
    />)
  
    expect(wrapper).toMatchSnapshot()
  })
  
  test('Should set Time Picker Form.Field error to true and render Label with given error message', () => {
    const wrapper = shallow(<DateInput
      type='text'
      width='11'
      date={false}
      time={true}
      placeholder='Test DateInput PlaceHolder'
      input={{
        onBlur: jest.fn(),
        onChange: jest.fn(),
        onFocus: jest.fn(),
        name: 'time',
        value: new Date(2021, 11, 24, 10, 33, 30, 0)
      }}
      meta={{
        touched: true,
        error: 'test error message'
      }}
    />)
  
    expect(wrapper).toMatchSnapshot()
  })
})



