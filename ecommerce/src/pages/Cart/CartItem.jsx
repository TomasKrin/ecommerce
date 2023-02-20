import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = ({ product, handleDecreaseQuantity, handleIncreaseQuantity }) => {
  return (
    <Container>
      <img src={product.picUrl[0]} alt={product.name} />
      <div>
        <CartItemPrice>
          {euroSymbol}
          {product.price}
        </CartItemPrice>
        <p>{product.name}</p>
        <CartItemColor>{product.color}</CartItemColor>
      </div>
      <ItemQuantityContainer>
        <AiOutlineMinus onClick={handleDecreaseQuantity} />
        <ItemQuantity>{product.quantity}</ItemQuantity>
        <AiOutlinePlus onClick={handleIncreaseQuantity} />
      </ItemQuantityContainer>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
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

const ItemQuantityContainer = styled.div`
  flex: 1;
  align-self: center;
  margin-right: 24px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  user-select: none;

  svg {
    cursor: pointer;
  }
`;

const ItemQuantity = styled.p`
  font-size: 18px;
`;
