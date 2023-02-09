import { Formik, Form } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { LOGIN_PATH } from "../../routes/const";
import { createUser } from "../../api/user";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
  confirm_password: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { confirm_password, ...user } = values;
    createUser(user)
      .then(() => {
        navigate(LOGIN_PATH);
      })
      .catch((error) => {
        console.error("failed to create user", error);
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
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
            <Title>Register Your Account</Title>
            <FormikInput name="first_name" placeholder="First Name" />
            <FormikInput name="last_name" placeholder="Last Name" />
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput type="password" name="password" placeholder="Password" />
            <FormikInput
              type="password"
              name="confirm_password"
              placeholder="Repeat Your Password"
            />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <StyledLink to={LOGIN_PATH}>Have an Account? Login...</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default Register;

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
