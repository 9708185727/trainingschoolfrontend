import React, { useEffect, useState } from "react";
import { GiArchiveRegister } from "react-icons/gi";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authActions";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { LOGIN_ROUTE } from "../../contants/ListUrl";

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
 const {loading,error} =useSelector((state)=>state.auth)
const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmission = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("role", data.role);
    formData.append("bio", data.bio);
    formData.append("resume", data.resume[0]); // Ensure the file is passed correctly
    formData.append(
      "participationHistory",
      JSON.stringify(data.participationHistory)
    );
  
    dispatch(registerUser(formData));
  };
  
  useEffect(()=>{
    toast(error,{
      type:"error"
    })
  },[error])

  return (
    <div className="flex min-h-1/2 w-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <GiArchiveRegister className="w-10 h-10 ms-20 text-teal-400 md:ms-36 lg:ms-36" />
        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="grid md:grid-cols-2 gap-x-4 gap-y-6"
          onSubmit={handleSubmit(formSubmission)}
        
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Please enter full name." })}
              id="name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <div className="text-red-500">{errors.name?.message}</div>
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-900"
            >
              Role
            </label>
            <select
              {...register("role", { required: "Choose your role." })}
              id="role"
              defaultValue=""
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            >
              <option value="" disabled>
                Select your role
              </option>
              {/* <option value="Admin">Admin</option> */}
              <option value="Recruiter">Recruiter</option>
              <option value="Participant">Participant</option>
            </select>
            <div className="text-red-500">{errors.role?.message}</div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter a valid email.",
              })}
              id="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <div className="text-red-500">{errors.email?.message}</div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Please enter a password.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long.",
                  },
                })}
                id="password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-3"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="text-red-500">{errors.password?.message}</div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showCPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long.",
                  },
                })}
                id="confirmPassword"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
              <button
                type="button"
                onClick={() => setShowCPassword(!showCPassword)}
                className="absolute right-3 bottom-3"
              >
                {showCPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="text-red-500">
              {errors.confirmPassword?.message}
            </div>
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-900"
            >
              Bio
            </label>
            <textarea
              {...register("bio")}
              id="bio"
              rows="4"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-900"
            >
              Resume
            </label>
            <input
              type="file"
              {...register("resume")}
              id="resume"
              accept=".pdf,.doc,.docx"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>
          <div>
            <div
              id="participationHistory"
              className="mt-2 border rounded-md bg-white p-3 text-gray-900"
            >
              
              <label>Participation History:</label>
        <input
          type="text"
          {...register("participationHistory")}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        />
          
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          a member?
         <Link to={LOGIN_ROUTE}>
         <button
          type="button"
          className="font-semibold text-indigo-600 hover:text-indigo-500 ms-2"
        >
          Already Have Account{" "}
        </button>
         </Link>
        </p> 
      </div>
    </div>
  );
};

export default SignUp;

// const formHadler=async(e)=>{
//   e.preventDefault();
//   let response=await fetch("http://localhost:5000/api/user/register",{
//  method:"POST",
//  headers:{
//   "Content-Type":"application/json",

//  },
//  body:JSON.stringify({
//   name,
//   email,
//   password,
//  })
// })
// }
