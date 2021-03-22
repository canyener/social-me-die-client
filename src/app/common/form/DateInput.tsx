import { FieldRenderProps } from 'react-final-form'
import { Form, FormFieldProps, Label } from 'semantic-ui-react'
import { DateTimePicker } from 'react-widgets'

interface IProps
  extends FieldRenderProps<Date, HTMLElement>,
  FormFieldProps {
  id?: string
}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  placeholder,
  date = false,
  time = false,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DateTimePicker
        placeholder={placeholder}
        value={input.value || null}
        onChange={input.onChange}
        date={date}
        time={time}
        {...rest}
      />
      {
        touched && error && (
          <Label basic color='red'>{error}</Label>
        )
      }
    </Form.Field>
  )
}

export default DateInput