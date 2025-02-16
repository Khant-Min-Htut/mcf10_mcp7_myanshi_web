import React, { lazy, Suspense } from "react";
// import LoginPage from "../../features/dashboard/auth/LoginPage";
import { path } from "framer-motion/client";
import ForgotPasswordPage from "../../features/dashboard/auth/ForgotPasswordPage";
import ResetPasswordPage from "../../features/dashboard/auth/ResetPasswordPage";
import LoginPage from "../../features/dashboard/auth/LoginPage";

const AuthRoute = [
  {
    path: "login",
    element: (
      <Suspense fallback={<h1>I am Loading.</h1>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "forgotPassword",
    element: (
      <Suspense fallback={<h1>I am Loading</h1>}>
        <ForgotPasswordPage />
      </Suspense>
    ),
  },
  {
    path: "resetPassword",
    element: (
      <Suspense fallback={<h1>I am Loading</h1>}>
        <ResetPasswordPage />
      </Suspense>
    ),
  },
];
export default AuthRoute;
