import { Field, ErrorMessage } from "formik";
import Input from "../Input/Input";

const FormikInput = ({ name, ...rest }) => {
  return (
    <div>
      <Field name={name} as={Input} {...rest}></Field>
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};

export default FormikInput;
