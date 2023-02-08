import styled from "styled-components";
import { inputBgColor, inputColor } from "../../consts/color";

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 4px;
  color: ${inputColor};
  background-color: ${inputBgColor};
  padding: 10px 14px;
  outline: none;
  border: none;
  width: 100%;
`;
