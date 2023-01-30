import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../utils/string";

export const Products = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);

  const isCategory = (product) => product.type === category;
  const categoryProducts = products.filter(isCategory);

  console.log(categoryProducts);

  return (
    <ProductsContainer>
      {categoryProducts.map((product) => (
        <ProductItem key={product.id}>
          <img src={product.picUrl[0]} alt={product.name} />
          <ProductName>{capitalizeFirstLetter(product.name.toLowerCase())}</ProductName>
        </ProductItem>
      ))}
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ProductItem = styled.div`
  margin: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 5px;
    width: 100%;
    flex: 1;
    object-fit: cover;
  }
`;

const ProductName = styled.p`
  margin: 0;
`;
