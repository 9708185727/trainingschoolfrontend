import React from "react";
import { setFilters, setLimit, setSort } from "../../redux/opportunity/oppSlice";
import { useDispatch, useSelector } from "react-redux";

const OppFilter = () => {
  const { type, query } = useSelector((state) => state.opp);
  const dispatch = useDispatch();

  function setOpportunitiesLimit(limit) {
    console.log(limit);
    dispatch(setLimit(parseInt(limit)));
  }

  function sortOpportunities(sort) {
    console.log(sort);
    dispatch(setSort(sort));
  }

  function filterByTitle(value) {
    console.log(value);
    dispatch(setFilters({ title: value }));
  }

  function filterByType(value) {
    console.log(value);
    dispatch(setFilters({ type: value }));
  }

  return (
    <>
      <div className="mt-5 bg-white mb-5 rounded-lg grid items-center md:grid-cols-2 xl:grid-cols-[auto,1fr,1fr,auto] gap-3 justify-stretch">
        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="name" className="font-semibold">
            Title :
          </label>
          <input
            type="text"
            id="title"
            value={query?.filters?.title || ""}
            onChange={(e) => filterByTitle(e.target.value)}
            className="ms-2 border border-black-lg border-md"
          />
        </div>

        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="category" className="font-semibold">
            Type :
          </label>
          <select
            id="type"
            className="ms-2 border border-black-lg border-md"
            value={query?.filters?.type || ""}
            onChange={(e) => filterByType(e.target.value)}
          >
            <option value="">Select Opp-Type</option>
            {type.map((typeItem, index) => (
              <option key={index} value={typeItem}>
                {typeItem}
              </option>
            ))}
          </select>
        </div>

        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="sort" className="font-semibold">
            Sort :
          </label>
          <select
            id="sort"
            value={query?.sort || ""}
            onChange={(e) => sortOpportunities(e.target.value)}
            className="ms-2 border border-black-lg border-md"
          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
            <option value={JSON.stringify({ deadline: 1 })}>
              Deadline:start to end
            </option>
            <option value={JSON.stringify({ deadline: -1 })}>
              Deadline:end to start
            </option>
          </select>
        </div>

        <div className="mx-2 md:mx-auto lg:mx-auto">
          <label htmlFor="limit" className="font-semibold">
            Limit :
          </label>
          <select
            id="limit"
            value={query?.limit || ""}
            className="ms-2 border border-black-lg border-md"
            onChange={(e) => setOpportunitiesLimit(e.target.value)}
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

export default OppFilter;
