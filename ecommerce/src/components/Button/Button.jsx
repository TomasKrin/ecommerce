import styled from "styled-components";
import { primaryButtonColor, primaryDarkButtonColor } from "../../consts/color";

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${primaryButtonColor};
  padding: 14px 30px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${primaryDarkButtonColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button = ({ children, ...rest }) => {
  return <PrimaryButton {...rest}>{children}</PrimaryButton>;
};

export default Button;
