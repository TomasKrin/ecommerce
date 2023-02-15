import { ErrorMessage, useField } from "formik";
import Select from "react-select";

const FormikSelect = ({ name, ...rest }) => {
  // [{...field}, {...meta(erorrai)}, {...helper}]
  const [field, , helpers] = useField(name);

  return (
    <div>
      <Select
        name={name}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        {...rest}
      />
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};

export default FormikSelect;
