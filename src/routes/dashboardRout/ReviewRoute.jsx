import React, { Suspense } from "react";
import { lazy } from "react";
import ReviewPage from "../../features/dashboard/dashBoardFeatures/Review/ReviewPage";

const ReviewRoute = [
  {
    path: "review",
    element: < ReviewPage/>,
  },
  
];
export default ReviewRoute;
