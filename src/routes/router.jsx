// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../features/home/pages/Home";
import About from "../features/about-us/pages/About";
import Menu from "../features/menu/pages/Menu";
import Contact from "../features/contact/pages/Contact";
import Blog from "../features/blog/pages/Blog";
import DetailBlog from "../features/detail-blog/pages/DetailBlog";
import NotFound from "../features/notfound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <DetailBlog /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
