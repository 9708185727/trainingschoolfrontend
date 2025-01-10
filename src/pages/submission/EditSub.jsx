import React, { useEffect, useState } from "react";
import SubForm from "../../components/submission/SubForm";
import { useNavigate, useParams } from "react-router";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { editSubmission, getSubmissionById } from "../../api/sub/submission";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";

const EditSub = () => {
  const navigate = useNavigate();
  const [submission, setSubmissionById] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getSubmissionById(params.id)
      .then((response) => {
        setSubmissionById(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast(error.response?.data || "An error occurred", {
          type: "error",
          autoClose: false,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  return (
    <div className="mx-12 max-w-screen-xl space-x-1">
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        className="inline-flex items-center mt-4 px-3 mb-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Go Back
      </button>
      <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Title label="Edit Submission" className="text-center my-4 text-lime-700" />
        {loading ? <Spinner /> : null}
        <hr />
        <SubForm submission={submission} />
      </div>
      <Footer />
    </div>
  );
};

export default EditSub;
