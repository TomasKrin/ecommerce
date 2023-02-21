import styled from "styled-components";
import { lightBorderColor } from "../consts/color";
import { Link, useNavigate } from "react-router-dom";
import { CART_PATH, HOME_PATH, LOGIN_PATH } from "../routes/const";
import { FaShoppingCart, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import EnhancedSearchBar from "../components/SearchBar/EnhancedSearchBar";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import CategoriesButton from "../components/CategoriesButton/CategoriesButton";

const TopBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogOut } = useContext(UserContext);

  const handleClickSign = () => {
    if (isLoggedIn) {
      handleLogOut();
      navigate(HOME_PATH);
      toast.success("Successfully logged out!");
    } else {
      navigate(LOGIN_PATH);
    }
  };

  return (
    <Container>
      <CategoriesButton />
      <Logo as={Link} to={HOME_PATH}>
        POHSE
      </Logo>
      <ItemContainer>
        <EnhancedSearchBar />
        <Link to={CART_PATH}>
          <FaShoppingCart fontSize={20} />
        </Link>
        <SignContainer onClick={handleClickSign}>
          {isLoggedIn ? <FaSignOutAlt /> : <FaSignInAlt />}
        </SignContainer>
      </ItemContainer>
    </Container>
  );
};

export default TopBar;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightBorderColor};
  background-color: #ffffff;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;
`;

const SignContainer = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
