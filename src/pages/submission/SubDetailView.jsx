import React, { useState, useEffect } from "react";
import { getSubmissionById } from "../../api/sub/submission";
import Footer from "../../components/Footer";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
 
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

const SubDetailView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        console.log(error);
      });
  }, [params.id]);

  // function addToCart() {
  //   dispatch(AddSubToCart(submission)); // Use action for submissions
  // }

  if (loading)
    return (
      <div className="mt-48 ms-96 text-lime-600">Submission loading...</div>
    );

  return (
    <>
      <div className="mx-12 max-w-screen-xl space-x-1">
        <button
          onClick={() => {
            navigate(-1); // Go back to the previous page
            setCount(count - 1);
          }}
          className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Go Back
        </button>
        <div className="max-w-full mt-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <img
              className="rounded-t-lg min-h-48 w-full"
              src={submission.url}
              alt="error"
            />
          </div>
          <div className="p-5">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {submission.title}
            </h1>
            <h2 className="mb-2 text-1xl font-semibold tracking-tight text-gray-500 dark:text-white">
              {submission.type}
            </h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-8">
              {submission.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-8">
              {submission.deadline
                ? new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(submission.deadline))
                : "No deadline provided"}
            </p>

            <div className="flex justify-between">
             
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Enroll now
                <FaArrowAltCircleRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SubDetailView;
