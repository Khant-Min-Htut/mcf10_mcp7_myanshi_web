import React, { Suspense } from "react";
import { lazy } from "react";
import CategoryPage from "../../features/dashboard/dashBoardFeatures/category/CategoryPage";
import { path } from "framer-motion/client";

const CategoryRoute = [
  {
    path: "category",
    element: <CategoryPage />,
  },
  {
    path: "category/add-new",
    element: (
      <Suspense fallback={<h1>I am Loading</h1>}>
        <CategoryPage />
      </Suspense>
    ),
  },
  {
    path: "category/edit/:id",
    element: (
      <Suspense fallback={<h1>I am Loading</h1>}>
        <CategoryPage />
      </Suspense>
    ),
  },
  {
    path: "category/delete/:id",
    element: (
      <Suspense fallback={<h1>I am Loading</h1>}>
        <CategoryPage />
      </Suspense>
    ),
  },
];
export default CategoryRoute;
