import styled from "styled-components";
import { primaryButtonColor, primaryDarkButtonColor } from "../../consts/color";

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${primaryButtonColor};
  padding: 17px 30px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${primaryDarkButtonColor};
  }
`;

const Button = ({ children }) => {
  return <PrimaryButton>{children}</PrimaryButton>;
};

export default Button;
