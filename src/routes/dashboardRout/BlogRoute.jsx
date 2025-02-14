import React, { Suspense } from "react";
import { lazy } from "react";
import BlogPage from "../../features/dashboard/dashBoardFeatures/blog/BlogPage";
import AddNewBlogPage from "../../features/dashboard/dashBoardFeatures/blog/AddNewBlogPage";

const BlogRoute = [
  {
    path: "blog",
    element: < BlogPage/>,
  },
  {
    path:"blog/add-new",
    element:<AddNewBlogPage/>
  }
];
export default BlogRoute;
