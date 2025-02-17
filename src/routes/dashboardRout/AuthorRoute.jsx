import React, { Suspense } from "react";
import { lazy } from "react";
import AuthorPage from "../../features/dashboard/dashBoardFeatures/Author/AuthorPage";
import AddNewAuthorPage from "../../features/dashboard/dashBoardFeatures/Author/AddNewAuthorPage";
import EditAuthorPage from "../../features/dashboard/dashBoardFeatures/Author/EditAuthorPage";

const AuthorRoute = [
  {
    path: "author",
    element: <AuthorPage />,
  },
  {
    path: "author/add-new",
    element: <AddNewAuthorPage />,
  },
  {
    path: "author/edit",
    element: <EditAuthorPage />,
  },
];
export default AuthorRoute;
