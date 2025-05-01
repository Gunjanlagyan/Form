import { useForm } from "react-hook-form";
import InputField from "./InputField";
import authService from "../Appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoginError("");
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          navigate("/profilePage");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="max-w-md h-screen mx-auto p-6 bg-white rounded-xl shadow-sm  flex flex-col">
      <h2 className="text-[35px] w-[80%] font-bold text-left mb-3">
        Login to your PopX account
      </h2>
      <p className="mt-1 w-[80%] text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <InputField
              className="mb-[9px]"
              label="Email address"
              placeholder="Enter email address"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />

            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <InputField
              className="mb-[9px]"
              label="Password"
              placeholder="Enter Password"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {(errors.password || loginError) && (
              <p className=" text-sm text-red-600">
                {errors.password?.message || loginError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-violet-800 text-white py-3 px-4 rounded-lg hover:bg-violet-900 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
