import {  Suspense } from "react";
import DashBoardPage from "../../features/dashboard/dashBoardFeatures/dashBoard/DashBoardPage";
import DashBoardLayout from "../../features/dashboard/DashBoardLayout";
import CategoryRoute from "./CategoryRout";
import BlogRoute from "./BlogRoute";
import PromotionRoute from "./PromotionRout";

export const DashBoardRouts=[
    {
        path: "dashboard",
        element: (
          <Suspense fallback={<h1>I am Loading</h1>}>
            <DashBoardLayout />
          </Suspense>
        ),
        children:[
            {
                index:true,
                element:<DashBoardPage/>
            },
            ...CategoryRoute,
            ...BlogRoute,
            ...PromotionRoute
        ]
      },
]