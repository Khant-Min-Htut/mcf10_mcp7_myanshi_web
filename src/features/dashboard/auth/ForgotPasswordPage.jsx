import React from 'react'
import AuthForm from './components/AuthForm';
import loginImage from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png"

const ForgotPasswordPage = () => {
  const handleForgot = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <AuthForm
      title="Forgot Your Password"
      subtitle="Enter your email to reset your password."
      image={loginImage}
      onSubmit={handleForgot}
      isForgotPasswordPage
      path={"/login"}
      buttonText="Reset Now"
    />
  );
}

export default ForgotPasswordPage