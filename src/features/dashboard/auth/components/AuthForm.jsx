import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AuthForm = ({
  title,
  subtitle,
  buttonText,
  onSubmit,
  image,
  isPassWordInput,
  isForgotPassword,
  path,
  isForgotPasswordPage,
  isNewPassword,
  isEmailorUsername,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/* Container */}
      <div className="relative max-[1194px]:items-center max-[1194px]:justify-center flex w-full max-w-[1194px] max-h-[834px]">
        {/* Image Section */}
        <div className="relative w-[731px] h-full max-h-[834px] flex items-center justify-center  max-[1194px]:hidden bg-green-500">
          <img
            src={image}
            alt="Auth Banner"
            className="w-full h-screen max-h-[834px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Form Section */}
        <div className="absolute flex flex-col items-center justify-center w-full max-w-[367px] h-[391px] max-[1194px]:left-0 max-[1194px]:mx-auto max-[1194px]:right-0 top-0 bottom-0 my-auto left-[779px] ">
          <div className="flex flex-col gap-1 text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-500">{subtitle}</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-12 w-full"
          >
            {/* Email Input */}
            {isEmailorUsername && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Email or Username
                </label>
                <input
                  type="text"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            )}

            {/* Password Input */}
            {isPassWordInput && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            )}

            {/* New Password */}
            {isNewPassword && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  {...register("NewPassword", {
                    required: "Password is required",
                  })}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your password"
                />
                {errors.NewPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.NewPassword.message}
                  </p>
                )}
                <p className=" text-[#71717A] text-[12px]">
                  Minimum 6 characters
                </p>
              </div>
            )}

            {/* Remember Me & Forgot Password (Only for Login) */}
            {isForgotPassword && (
              <>
                {buttonText === "Log in" && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2 rounded-sm accent-black"
                      />

                      <span className="text-sm text-gray-700">Remember Me</span>
                    </label>
                    <a
                      href={path}
                      className="text-sm text-[#2563EB] hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white h-10 rounded-md transition"
            >
              {buttonText}
            </button>

            {isForgotPasswordPage && (
              <button children className="w-full border text-center items-center  text-[#18181B] h-10 rounded-md transition">
                <Link to={path}>Back to login</Link>
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
