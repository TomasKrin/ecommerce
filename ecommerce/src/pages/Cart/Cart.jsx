//1. Carte atvaizduojam itemus (kaina x quantity)
//1.1 Mygtukas apmoketi, numeta i login/register page
//2.Login page
//3. Register page
//4. AuthContext susitvatkome, kad saugotu useri

import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { LOGIN_PATH, CHECKOUT_PATH } from "../../routes/const";
import { useProducts } from "../../hooks/products";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Cart = () => {
  const { data } = useProducts();
  const products = data || [];
  const cartProduct = products.slice(0, 2);
  console.log(cartProduct);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <h2>MY BAG</h2>
        <p>Items are reserved for 30 minutes</p>
      </Header>
      <CartContainer>
        {cartProduct.map((product) => (
          <CartItem key={product.id}>
            <img src={product.picUrl[0]} alt={product.name} />
            <div>
              <CartItemPrice>
                {euroSymbol}
                {product.price}
              </CartItemPrice>
              <p>{product.name}</p>
              <CartItemColor>{product.color}</CartItemColor>
            </div>
          </CartItem>
        ))}
      </CartContainer>
      <ButtonContainer>
        <Button as={Link} to={isLoggedIn ? CHECKOUT_PATH : LOGIN_PATH}>
          Checkout
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const CartContainer = styled.div`
  background-color: #ffffff;
`;

const CartItem = styled.div`
  display: flex;
  padding: 20px 30px 20px 0px;
  background-color: #ffffff;
  img {
    width: 100px;
    margin-right: 8px;
    object-fit: contain;
  }
`;

const CartItemPrice = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const CartItemColor = styled.p`
  font-weight: 300;
  margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
