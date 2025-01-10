import React from "react";
import { setFilters, setLimit, setSort } from "../../redux/submission/subSlice"; // Assuming you have a Redux slice for submissions
import { useDispatch, useSelector } from "react-redux";

const SubFilter = () => {
  const { status, query } = useSelector((state) => state.sub); // Accessing submission state
  const dispatch = useDispatch();

  function setSubmissionsLimit(limit) {
    console.log(limit);
    dispatch(setLimit(parseInt(limit)));
  }

  function sortSubmissions(sort) {
    console.log(sort);
    dispatch(setSort(sort));
  }

  function filterByOpportunityId(value) {
    console.log(value);
    dispatch(setFilters({ opportunityId: value }));
  }

  function filterByCreatedBy(value) {
    console.log(value);
    dispatch(setFilters({ createdBy: value }));
  }

  function filterByStatus(value) {
    console.log(value);
    dispatch(setFilters({ status: value }));
  }

  return (
    <>
      <div className="mt-5 bg-white mb-5 rounded-lg grid items-center md:grid-cols-2 xl:grid-cols-[auto,1fr,1fr,auto] gap-3 justify-stretch">
        {/* Filter by Opportunity ID */}
        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="opportunityId" className="font-semibold">
            Opportunity ID :
          </label>
          <input
            type="text"
            id="opportunityId"
            value={query?.filters?.opportunityId || ""}
            onChange={(e) => filterByOpportunityId(e.target.value)}
            className="ms-2 border border-black-lg border-md"
          />
        </div>

        {/* Filter by Created By (User ID) */}
        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="createdBy" className="font-semibold">
            Created By (User ID) :
          </label>
          <input
            type="text"
            id="createdBy"
            value={query?.filters?.createdBy || ""}
            onChange={(e) => filterByCreatedBy(e.target.value)}
            className="ms-2 border border-black-lg border-md"
          />
        </div>

        {/* Filter by Status */}
        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="status" className="font-semibold">
            Status :
          </label>
          <select
            id="status"
            className="ms-2 border border-black-lg border-md"
            value={query?.filters?.status || ""}
            onChange={(e) => filterByStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            {["Pending", "Reviewed", "Approved", "Rejected"].map((statusItem, index) => (
              <option key={index} value={statusItem}>
                {statusItem}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by Date */}
        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="sort" className="font-semibold">
            Sort :
          </label>
          <select
            id="sort"
            value={query?.sort || ""}
            onChange={(e) => sortSubmissions(e.target.value)}
            className="ms-2 border border-black-lg border-md"
          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
          </select>
        </div>

        {/* Limit Results */}
        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="limit" className="font-semibold">
            Limit :
          </label>
          <select
            id="limit"
            value={query?.limit || ""}
            className="ms-2 border border-black-lg border-md"
            onChange={(e) => setSubmissionsLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SubFilter;
