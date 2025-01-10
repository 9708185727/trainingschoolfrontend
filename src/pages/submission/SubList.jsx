import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import SubCard from "../../components/submission/SubCard"; // Updated component for submissions
 import { resetQuery } from "../../redux/submission/subSlice"; // Updated slice
import SubLoadingCard from "../../components/submission/LoaderCard"; // Updated component for submissions
import { getAllSubmissions } from "../../redux/submission/subActions"; // Updated actions
import SubFilter from "../../components/submission/SubFilter";

const SubList = () => {
  const { loading, submissions=[], query } = useSelector((state) => state.sub); // Updated state to "submission"

  const { user: currentUser } = useSelector((state) => state.auth);
  const canAdd = currentUser._doc?.role !== "Participant";
  const dispatch = useDispatch();
 

  function resetFilterQuery() {
    dispatch(resetQuery());
  }

  useEffect(() => {
    dispatch(getAllSubmissions()); // Fetch submissions instead of opportunities
 
  }, [dispatch, query]);

  // useEffect(()=>{
  //   dispatch(getAllSubmissions());
  // },[])
  return (
    <>
      <div className="mx-12 max-w-screen-xl">
        <div className="my-2 flex justify-between">
          <Title label="New Arrivals" />
          <div className="space-x-2 space-y-2">
            {canAdd ? (
              <NavLink to={"add"}>
                <button className="border-2 text-blue-500 border-black rounded-lg px-7 py-1 backdrop:nowrap bg-slate-100 hover:bg-slate-400">
                  Add
                </button>
              </NavLink>
            ) : null}
            <button
              type="button"
              onClick={resetFilterQuery}
              className="border-2 text-blue-500 border-black rounded-lg px-2 py-1 bg-slate-100 hover:bg-slate-400"
            >
              Ftr-Reset
            </button>
          </div>
        </div>
        <hr />
        <div>
         <SubFilter /> 
        </div>
        {loading ? (
          <SubLoadingCard />
        ) : Array.isArray(submissions) && submissions.length === 0 ? (
          <h2 className="w-full mt-24 text-center justify text-red-500">
            Submissions not found
          </h2>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-3 border-t">
            {Array.isArray(submissions) &&
              submissions.map((item, index) => (
                <SubCard key={index} id={item._id} {...item}  /> // Updated card component for submissions
              ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SubList;
