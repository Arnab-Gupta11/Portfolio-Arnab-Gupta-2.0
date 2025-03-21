import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import AllProject from "../components/Project/AllProject";
import TransitionLayout from "../Layout/TransitionLayout";
import AllProject from "../components/Project/AllProject/AllProject";
import AllBlogs from "../components/Blog/AllBlogs";
import BlogDetails from "../components/Blog/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TransitionLayout />, // Use Layout here
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/all-projects",
        element: <AllProject />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);
