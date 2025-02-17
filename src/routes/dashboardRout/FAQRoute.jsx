import React, { Suspense } from "react";
import { lazy } from "react";
import FAQPage from "../../features/dashboard/dashBoardFeatures/FAQ/FAQPage";

const FAQRoute = [
  {
    path: "faq",
    element: <FAQPage />,
  },
];
export default FAQRoute;
