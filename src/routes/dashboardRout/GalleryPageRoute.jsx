import React, { Suspense } from "react";
import { lazy } from "react";
import GalleryPage from "../../features/dashboard/dashBoardFeatures/Gallery/GalleryPage";

const GalleryRoute = [
  {
    path: "gallery",
    element: < GalleryPage/>,
  },
  
];
export default GalleryRoute;
