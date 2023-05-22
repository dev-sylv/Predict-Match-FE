import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../../Components/Layout";
import { HomeScreen } from "../../pages";

const userRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);

export default userRoute;
