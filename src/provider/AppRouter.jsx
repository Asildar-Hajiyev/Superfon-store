import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import StoreLocation from "../pages/StoreLocation";
import Corporate from "../pages/Corporate";
import Basket from "../pages/Basket";
import Favorite from "../pages/Favorite";
import Home_Section1 from "../pages/Home_Section1";
import Home_Section3 from "../pages/Home_Section3";
import Card from "../components/Card";
import Details from "../components/Details";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Comparison from "../components/Comparison";
import Profil from "../pages/Profil";
import NotFound from "../pages/NotFound";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Main },
      { path: "/storelocation", Component: StoreLocation },
      { path: "/corporate", Component: Corporate },
      { path: "/basket", Component: Basket },
      { path: "/favorite", Component: Favorite },
      { path: "/home_section1", Component: Home_Section1 },
      { path: "/home_section3", Component: Home_Section3 },
      { path: "/card", Component: Card },
      { path: "/details/:id", Component: Details },
      { path: "/products", Component: Products },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/forgot-password", Component: ForgotPassword },
      { path: "/compare", Component: Comparison },
      { path: "/profil", Component: Profil },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default AppRouter;
