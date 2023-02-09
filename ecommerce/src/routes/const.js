import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";

export const HOME_PATH = "/";
export const PRODUCTS_LIST_PATH = `${HOME_PATH}category/:category`;
export const PRODUCT_PATH = `${PRODUCTS_LIST_PATH}/:productId`;
export const CART_PATH = `${HOME_PATH}cart`;
export const LOGIN_PATH = `${HOME_PATH}login`;
export const REGISTER_PATH = `${HOME_PATH}register`;
export const CHECKOUT_PATH = `${HOME_PATH}checkout`;

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
      path: CART_PATH,
      Component: Cart,
    },
    {
      path: LOGIN_PATH,
      Component: Login,
    },
    {
      path: REGISTER_PATH,
      Component: Register,
    },
    {
      path: CHECKOUT_PATH,
      Component: Checkout,
    },
  ],
};
