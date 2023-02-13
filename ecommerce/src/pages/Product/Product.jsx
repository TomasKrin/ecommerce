import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/products";

const Product = () => {
  const { data } = useProducts();
  const products = data || [];

  const { productId } = useParams();

  const product = products.find((product) => product.id === Number(productId));
  console.log(product);
  if (!product) {
    return <div>Loading...</div>;
  }
  return <div>{product.name}</div>;
};

export default Product;
