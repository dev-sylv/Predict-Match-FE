import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../../Components/Layout";
import { HomeScreen, Loading, Login, OtpPage, SignUp } from "../../pages";

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
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/otp",
    element: <OtpPage />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default userRoute;
