import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SiSimplelogin } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {Navigate} from "react-dom"
import { REGISTER_ROUTE } from "../../contants/ListUrl.js";
import { loginUser } from "../../redux/auth/authActions.js";
import { toast } from "react-toastify";
import Spinner from "../Spinner.jsx";
import { Link } from "react-router";
const SignIn = () => {
  
  const [ShowPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading,error } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const formSubmission = (data) => {
    dispatch(loginUser(data))
    // console.log(data);
    // Login(data)
    //   .then((response) => {
    //     console.log(response.data);
    //     dispatch(setUser(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
  };
  useEffect(() => {
   toast(error,{
    type:"error",
    autoClose:1500,
   })
  }, [error]);
  return (
    <>
      <div className="flex min-h-full w-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <SiSimplelogin className="w-10 h-10 ms-20 text-teal-400 md:ms-36 lg:ms-36" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(formSubmission)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  {...register("email", {
                    required: "Please enter email.",
                  })}
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <div className="text-red-500">{errors.email?.message}</div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  type={ShowPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Please enter password.",
                    minLength: {
                      value: 8,
                      message: "password length must be greater than 8",
                    },
                  })}
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!ShowPassword)}
                  className="absolute right-3 bottom-3"
                >
                  {ShowPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
                <div className="text-red-500">{errors.password?.message}</div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in {loading?<span className="ml-3"><Spinner/></span>:null}
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
           <Link to={REGISTER_ROUTE}>
           <button
         type="button"
              className="font-semibold ml-3 text-indigo-600 hover:text-indigo-500"
            >
              Create New Account
            </button>
           </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
