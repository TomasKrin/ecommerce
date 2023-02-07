import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          // errors['email']

          if (!values.email) {
            errors.email = "Required";
          }

          if (!values.password) {
            errors.password = "Required";
          }
          //   console.log(errors);
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          //name turi but kaip ir inital value key
          <Form>
            <div>
              <Field type="email" name="email"></Field>
              <ErrorMessage name="email" component="div"></ErrorMessage>
            </div>
            <div>
              <Field type="password" name="password"></Field>
              <ErrorMessage name="password" component="div"></ErrorMessage>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
