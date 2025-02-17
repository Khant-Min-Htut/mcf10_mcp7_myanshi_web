import React, { Suspense } from "react";
import { lazy } from "react";
import ProfilePage from "../../features/dashboard/dashBoardFeatures/profile/ProfilePage";

const ProfileRoute = [
  {
    path: "profile",
    element: <ProfilePage />,
  },
];
export default ProfileRoute;
