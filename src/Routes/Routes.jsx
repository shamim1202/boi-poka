import { createBrowserRouter } from "react-router";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ReadList from "../pages/ReadList/ReadList";
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
      {
        path: "/book_details/:id",
        Component: BookDetails,
        loader: ()=>fetch("booksData.json")
      },
      {
        path: "/read_list",
        Component: ReadList,
        loader: ()=>fetch("booksData.json")
      },
      {
        path: "/about",
        Component: About,
      }
    ],
  },
]);
