import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Roots from "../pages/Roots/Roots";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: ()=>fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
    ],
  },
]);
