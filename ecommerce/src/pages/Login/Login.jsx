import { Formik, Form } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { REGISTER } from "../../routes/const";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
});

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
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors = {};
        //   // errors['email']

        //   if (!values.email) {
        //     errors.email = "Required";
        //   }

        //   if (!values.password) {
        //     errors.password = "Required";
        //   }

        //   return errors;
        // }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          //name turi but kaip ir inital value key
          <StyledForm>
            <Title>Login</Title>
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput type="password" name="password" placeholder="Password" />
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
            <StyledLink to={REGISTER}>Sign Up</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default Login;

const StyledForm = styled(Form)`
  max-width: ${screenSize.mobile};
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
`;
