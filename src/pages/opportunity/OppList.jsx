import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import OppCard from "../../components/opportunity/OppCard";
import { resetQuery } from "../../redux/opportunity/oppSlice";
import OppLoadingCard from "../../components/opportunity/LoaderCard";
import { getAllOpportunity, getOpportunityType } from "../../redux/opportunity/oppActions";
import OppFilter from "../../components/opportunity/OppFilter";

const OppList = () => {
  const { loading, opportunity = [], query } = useSelector((state) => state.opp);

    const {user: currentUser } = useSelector((state) => state.auth);
  
  const canAdd = currentUser._doc?.role !=='Participant';
  const dispatch = useDispatch();

  function resetFilterQuery() {
    dispatch(resetQuery());
  }

  useEffect(() => {
    dispatch(getAllOpportunity(query));
    dispatch(getOpportunityType());
  }, [dispatch, query]);

  return (
    <>
      <div className="mx-12 max-w-screen-xl">
        <div className=" my-2 flex justify-between ">
          <Title label="New Arrivals" />
         <div className="space-x-2 space-y-2 ">
      {canAdd?   <NavLink to={"add"}>
            <button className="border-2 text-blue-500 border-black rounded-lg px-7 py-1 backdrop:nowrap  bg-slate-100 hover:bg-slate-400">
             Add
            </button>
          </NavLink>:null}
         <button
            type="button"
            onClick={resetFilterQuery}
            className="border-2 text-blue-500 border-black rounded-lg px-2 py-1  bg-slate-100 hover:bg-slate-400"
          >
           Ftr-Reset 
          </button>
        
        </div>

         </div>
         <hr />
        <div>
          <OppFilter />
        </div>
        {loading ? (
          <OppLoadingCard />
        ) : Array.isArray(opportunity) && opportunity.length === 0 ? (
          <h2 className="w-full mt-24 text-center justify text-red-500">
            Opportunities not found
          </h2>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-3 border-t">
            {Array.isArray(opportunity) &&
              opportunity.map((item, index) => (
                <OppCard key={index} id={item._id} {...item} />
              ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OppList;
