import React, { Suspense } from "react";
import { lazy } from "react";
import LocationPage from "../../features/dashboard/dashBoardFeatures/location/LocationPage";
import AddNewLocationPage from "../../features/dashboard/dashBoardFeatures/location/AddNewLocationPage";
import EditLocationPage from "../../features/dashboard/dashBoardFeatures/location/EditLocationPage";

const LocationRoute = [
  {
    path: "location",
    element: <LocationPage />,
  },
  {
    path: "location/add-new",
    element: <AddNewLocationPage />,
  },
  {
    path: "location/edit",
    element: <EditLocationPage />,
  },
];
export default LocationRoute;
