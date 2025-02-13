import React from "react";
import AuthForm from "./components/AuthForm";
import loginImage from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png"

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <AuthForm
      title="Welcome to MYANSHI!"
      subtitle="Please sign in to your account and start the adventure!"
      buttonText="Log in"
      image={loginImage}
      onSubmit={handleLogin}
      isPassWordInput
      isForgotPassword
      isEmailorUsername
      path="forgotPassword"
    />
  );
};

export default LoginPage;
