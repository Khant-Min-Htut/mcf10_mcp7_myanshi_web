import React from 'react'
import AuthForm from './components/AuthForm';
import loginImage from "../../../assets/MyanShi/AboutUs/restaurant-image-1.png"

const ResetPasswordPage = () => {
  const handleForgot = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <AuthForm
      title="Reset Your Password"
      subtitle="Create a new password to regain access to your account."
      image={loginImage}
      onSubmit={handleForgot}
      path={"/login"}
      buttonText="Confirm"
      isNewPassword
    />
  );
}

export default ResetPasswordPage