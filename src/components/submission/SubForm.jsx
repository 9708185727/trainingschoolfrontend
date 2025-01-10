import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addSubmissions} from "../../redux/submission/subActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { SUB_ROUTE } from "../../contants/ListUrl";

import { editSubmission } from "../../api/sub/submission";

const SubmissionForm = ({ submission }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const isEdit = submission ? true : false;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (submission) {
      reset(submission);
    }
  }, [submission, reset]);

  async function handleFormSubmit(data) {
    const formData = new FormData();
    formData.append("opportunityId", data.opportunityId);
    formData.append("createdBy", data.createdBy);
    if (data.file?.[0]) formData.append("file", data.file[0]);
    formData.append("feedback", data.feedback || "");

    try {
      if (isEdit) {
        await editSubmission(submission._id, formData);
        toast("Submission updated successfully", { type: "success" });
      } else {
        dispatch(addSubmissions(formData));
        toast("Submission added successfully", { type: "success" });
      }
      navigate(SUB_ROUTE);
    } catch (error) {
      toast(error.response?.data || "Error occurred", { type: "error" });
    }
  }

  return (
    <form
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit(handleFormSubmit)}
      encType="multipart/form-data"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="opportunityId">
          Opportunity ID
        </label>
        <input
          type="text"
          id="opportunityId"
          {...register("opportunityId", { required: "Opportunity ID is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
          disabled={isEdit}
        />
        {errors.opportunityId && <p className="text-red-600 text-sm">{errors.opportunityId.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="file">
          Upload File
        </label>
        <input
          type="file"
          id="file"
          {...register("file", { required: !isEdit && "File is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
        />
        {errors.file && <p className="text-red-600 text-sm">{errors.file.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="feedback">
          Feedback (Optional)
        </label>
        <textarea
          id="feedback"
          {...register("feedback")}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isEdit ? "Update Submission" : "Add Submission"}
      </button>
    </form>
  );
};

export default SubmissionForm;
