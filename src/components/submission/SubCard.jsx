import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { deleteSubmission } from "../../api/sub/submission";
import Modal from "./Modal";

const SubCard = (props) => {
  const { _id, opportunityId, createdBy, status, createdAt } = props;
  console.log(props)
  const { user: currentUser } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
console.log(status);
  const canEditOnlyAdmin = currentUser._doc?.role === "Admin";
  const canEdit = currentUser._doc?.role !== "Participant";

  async function removeSubmission() {
    setIsOpen(true);
  }

  async function confirmDelete() {
    try {
      await deleteSubmission(_id);
      toast(`Submission deleted successfully`, {
        type: "success",
        autoClose: 1500,
      });
    } catch (error) {
      toast(error.response.data || "Error deleting submission", {
        type: "error",
        autoClose: false,
      });
    } finally {
      setIsOpen(false);
    }
  }

  return (
    <>
      <div
        key={_id}
        className="max-w-sm mt-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="p-5">
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Submission for Opportunity: <p className="text-teal-800">
            {opportunityId}
            </p>
          </h1>
          <h2 className="mb-2 text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">
            Submitted By: {createdBy}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Status:{" "}
            <span
              className={`${
                status === "Approved"
                  ? "text-green-500"
                  : status === "Rejected"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {status}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Submitted On:{" "}
            {createdAt
              ? new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(createdAt))
              : "Date not available"}
          </p>

          <div>
            <Link to={`/submission/${_id}`}>
              <button className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Details
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
            {canEditOnlyAdmin && (
              <button
                onClick={removeSubmission}
                className="items-center sm:ml-1 md:ml-3 lg:ml mt-1 text-sm font-medium text-center float-end"
              >
                <MdDeleteForever className="text-red-500 font-semibold w-6 h-6" />
              </button>
            )}
            {canEdit && (
              <Link to={`/submission/edit/${_id}`}>
                <button className="items-center text-sm mt-1 font-medium text-center float-end">
                  <FaRegEdit className="text-cyan-500 font-semibold w-6 h-6" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        label="Delete Submission"
        body={<p>Are you sure you want to delete this submission?</p>}
        actions={
          <button className="bg-red-500 text-white px-4 py-2" onClick={confirmDelete}>
            Confirm
          </button>
        }
      />
    </>
  );
};

export default SubCard;
