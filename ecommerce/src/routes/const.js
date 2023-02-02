import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";

export const HOME_PATH = "/";
export const PRODUCTS_LIST_PATH = `${HOME_PATH}:category`;
export const PRODUCT_PATH = `${PRODUCTS_LIST_PATH}/:productId`;

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: PRODUCTS_LIST_PATH,
      Component: Products,
    },
    {
      path: PRODUCT_PATH,
      Component: Product,
    },
  ],
};
