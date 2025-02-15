import React, { Suspense } from "react";
import { lazy } from "react";
import PromotionPage from "../../features/dashboard/dashBoardFeatures/promotion/PromotionPage";
import AddNewPromotionPage from "../../features/dashboard/dashBoardFeatures/promotion/AddNewPromotionPage";
import EditPromotionPage from "../../features/dashboard/dashBoardFeatures/promotion/EditPromotionPage";

const PromotionRoute = [
  {
    path: "promotions",
    element: <PromotionPage />,
  },
  {
    path: "promotions/add-new",
    element: <AddNewPromotionPage />,
  },
  {
    path: "promotions/edit",
    element: <EditPromotionPage />,
  },
];
export default PromotionRoute;
