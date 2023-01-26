import { useParams } from "react-router-dom";

export const Products = () => {
  const { category } = useParams();

  return <div>Products{category}</div>;
};
