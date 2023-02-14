//single page boilerplate

import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/products";
import styled from "styled-components";
import { screenSize } from "../../consts/mediaQueries";
import { lightBorderColor } from "../../consts/color";
import { euroSymbol } from "../../consts/currency";
import Button from "../../components/Button/Button";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const Product = () => {
  const { data, isLoading } = useProducts();
  const products = data || [];
  const { productId } = useParams();
  const { handleAddToCart } = useContext(CartContext);

  const product = products.find((product) => product.id === Number(productId));

  console.log(product);

  if (isLoading) {
    return <div>Kraunasi...</div>;
  }
  if (!product) {
    return <div>Produkto nėra...</div>;
  }
  return (
    <Container>
      <PhotoSide>
        <img src={product.picUrl[0]} alt={product.name} />
      </PhotoSide>
      <InfoSide>
        <Title>{product.name}</Title>
        <Price>
          {euroSymbol}
          {product.price}
        </Price>
        <Description>{product.description}</Description>
        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
      </InfoSide>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 40px auto;
  display: flex;
`;

const PhotoSide = styled.div`
  width: 60%;
  margin-right: 48px;

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
    border: 1px solid ${lightBorderColor};
  }
`;

const InfoSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 24px;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 16px;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;
