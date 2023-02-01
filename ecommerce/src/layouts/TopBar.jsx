import styled from "styled-components";
import { lightBorderColor } from "../consts/color";
import SearchBar from "../components/SearchBar/SearchBar";

const TopBar = () => {
  return (
    <Container>
      <NavigationItem>Categories</NavigationItem>
      <Logo>POHSE</Logo>
      <SearchBar />
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightBorderColor};
`;

const NavigationItem = styled.div`
  font-size: 19px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
`;
