import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch ,useSelector} from "react-redux";
import { addOpp,editOpp } from "../../redux/opportunity/oppActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { OPP_ROUTE } from "../../contants/ListUrl";

import { editOpportunity } from "../../api/opp/opportunity";
const OppForm = ({ opportunity }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const isEdit =opportunity?true:false
  const navigate = useNavigate();
  const dispatch = useDispatch();
// const {loading,error}= useSelector((state)=>state.opp)
  useEffect(() => {
    if (opportunity) {
      // Preprocess the deadline to match the required format
      const formattedOpportunity = {
        ...opportunity,
        deadline: opportunity.deadline
          ? new Date(opportunity.deadline).toISOString().split("T")[0]
          : "",
      };
      reset(formattedOpportunity);
    }
  }, [opportunity, reset]);

  async function handleFormSubmit(data) {
  if(!data.url) delete data.url;
    try {
      if (isEdit) {
      await editOpportunity(opportunity._id, data)
      // dispatch(editOpp({id:opportunity._id}, data));
       toast("Opportunity added successfully", { type: "success" });
     
       
      } else {
        dispatch(addOpp(data));
        toast("Opportunity added successfully", { type: "success" });
      }
      navigate(OPP_ROUTE);
    } catch (error) {
      toast(error.response?.data || "Error occurred", { type: "error" });
    }
  }

  return (
    <form
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
        />
        {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="type">
          Type
        </label>
        <select
          id="type"
          {...register("type", { required: "Type is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
        >
          <option value="">Select Type</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Quiz">Quiz</option>
          <option value="Job">Job</option>
          <option value="Internship">Internship</option>
        </select>
        {errors.type && <p className="text-red-600 text-sm">{errors.type.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
        ></textarea>
        {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="deadline">
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          {...register("deadline", { required: "Deadline is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
        />
        {errors.deadline && <p className="text-red-600 text-sm">{errors.deadline.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="url">
          Image URL (Optional)
        </label>
        <input
          type="url"
          id="url"
          {...register("url")}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50  disabled:cursor-not-allowed"
      >
        {isEdit ? "Update Opportunity" : "Add Opportunity"} 
      </button>
    </form>
  );
};

export default OppForm;
