import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

// Lazy load components for better performance
const MenuPage = lazy(() =>
  import("../../features/dashboard/dashBoardFeatures/menu/MenuPage")
);
const AddNewMenuPage = lazy(() =>
  import("../../features/dashboard/dashBoardFeatures/menu/AddNewMenuPage")
);
const EditMenuPage = lazy(() =>
  import("../../features/dashboard/dashBoardFeatures/menu/EditMenuPage")
);
// const MenuDelete = lazy(() => import("../../features/dashboard/dashBoardFeatures/menu/MenuDelete"));

const MenuRoute = [
  {
    path: "menu",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MenuPage />
      </Suspense>
    ),
  },
  {
    path: "menu/add-new",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AddNewMenuPage />
      </Suspense>
    ),
  },
  {
    path: "menu/edit/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EditMenuPage />
      </Suspense>
    ),
  },
  {
    path: "menu/delete/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MenuPage />
      </Suspense>
    ),
  },
  // Redirect unknown menu routes to the main menu page
  {
    path: "menu/*",
    element: <Navigate to="/dashboard/menu" />,
  },
];

export default MenuRoute;
