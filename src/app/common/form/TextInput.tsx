import { FieldRenderProps } from "react-final-form"
import { Form, FormFieldProps, Label } from "semantic-ui-react"

interface IProps
  extends FieldRenderProps<string, HTMLInputElement>,
  FormFieldProps { }

const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <input type={type} {...input} placeholder={placeholder} />
      {
        touched && error && (
          <Label basic color='red'>
            {error}
          </Label>
        )
      }
    </Form.Field>
  )
}

export default TextInput 