import React, { Suspense } from "react";
import { lazy } from "react";
import CategoryPage from "../../features/dashboard/dashBoardFeatures/category/CategoryPage";

const CategoryRoute = [
  {
    path: "category",
    element: <CategoryPage />,
  },
];
export default CategoryRoute;
