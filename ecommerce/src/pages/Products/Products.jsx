import { useState } from "react";
import { useParams, useNavigate, generatePath } from "react-router-dom";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../utils/string";
import Select from "react-select";
import { getUniqueArrayItems } from "../../utils/array";
import { screenSize } from "../../consts/mediaQueries";
import { lightBorderColor } from "../../consts/color";
import { PRODUCT_PATH } from "../../routes/const";
import { useProducts } from "../../hooks/products";

export const Products = () => {
  const navigate = useNavigate();
  const { data } = useProducts();
  const products = data || [];
  const { category } = useParams();
  const [selectedColors, setSelectedColors] = useState([]);

  const isCategory = (product) => product.type === category;
  const categoryProducts = products.filter(isCategory);

  const colors = categoryProducts.map((product) => product.color.toLowerCase());
  const uniqueColors = getUniqueArrayItems(colors);
  const colorOptions = uniqueColors.map((color) => ({
    value: color,
    label: capitalizeFirstLetter(color),
  }));

  //['black', 'red']
  //[{value: 'black, label: 'Black}]

  const selectedColorsArray = selectedColors.map((color) => color.value);
  const filteredByColorProducts = categoryProducts.filter((product) =>
    selectedColorsArray.includes(product.color.toLowerCase())
  );

  const filteredProducts = filteredByColorProducts.length
    ? filteredByColorProducts
    : categoryProducts;

  const navigateToProduct = (category, productId) => {
    const path = generatePath(PRODUCT_PATH, { category, productId });
    navigate(path);
  };

  return (
    <div>
      <FiltersContainer>
        <Filter>
          <Select
            isMulti
            name="colors"
            options={colorOptions}
            value={selectedColors}
            onChange={setSelectedColors}
          />
        </Filter>
      </FiltersContainer>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} onClick={() => navigateToProduct(category, product.id)}>
            <img src={product.picUrl[0]} alt={product.name} />
            <ProductProperty>{capitalizeFirstLetter(product.name.toLowerCase())}</ProductProperty>
            <ProductProperty>€ {product.price}</ProductProperty>
          </ProductItem>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Products;

const FiltersContainer = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Filter = styled.div`
  margin-right: 24px;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductItem = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${lightBorderColor};
  cursor: pointer;

  img {
    border-radius: 5px;
    width: 100%;
    flex: 1;
    object-fit: cover;
  }
`;

const ProductProperty = styled.p`
  margin-top: 0px;
  margin-bottom: 8px;
  margin-left: 16px;
`;
