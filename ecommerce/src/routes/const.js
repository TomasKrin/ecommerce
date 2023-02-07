import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";

export const HOME_PATH = "/";
export const PRODUCTS_LIST_PATH = `${HOME_PATH}category/:category`;
export const PRODUCT_PATH = `${PRODUCTS_LIST_PATH}/:productId`;
export const CART = `${HOME_PATH}cart`;
export const LOGIN = `${HOME_PATH}login`;

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
    {
      path: CART,
      Component: Cart,
    },
    {
      path: LOGIN,
      Component: Login,
    },
  ],
};
