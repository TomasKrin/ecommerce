import { getUniqueArrayItems } from "../../utils/array";
import styled from "styled-components";
import ProductCategory from "./ProductCategory";
import { useProducts } from "../../hooks/products";

const Home = () => {
  const { data, isLoading, error } = useProducts();
  const products = data || [];

  const uniqCategories = getUniqueArrayItems(products.map((product) => product.type));

  // [t'shirt...]
  //[{category: 't'shirt'}, img: ''}]
  const categories = uniqCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl,
  }));

  if (isLoading) {
    return "Kraunasi..";
  }

  if (error) {
    return "Nepavyko gauti produktų";
  }

  return (
    <Container>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory key={category.name} name={category.name} image={category.image[0]} />
        ))}
      </ProductContainer>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100vh;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
