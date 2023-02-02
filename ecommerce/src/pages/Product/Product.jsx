import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
const Product = () => {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();

  const product = products.find((product) => product.id === Number(productId));
  console.log(product);
  if (!product) {
    return <div>Loading...</div>;
  }
  return <div>{product.name}</div>;
};

export default Product;
