import React from "react";

const SubLoadingCard = () => {
  return (
    <div className="border bg-slate-200 rounded-xl shadow-lg p-6 space-y-4 animate-pulse">
      {/* Simulated Image Loader */}
      <div className="bg-slate-300 w-full h-40 rounded-md"></div>

      {/* Simulated Title Loader */}
      <div className="bg-slate-300 w-3/4 h-6 rounded-md"></div>

      {/* Simulated Type Loader */}
      <div className="bg-slate-300 w-1/2 h-5 rounded-md"></div>

      {/* Simulated Description Loader */}
      <div className="bg-slate-300 w-full h-14 rounded-md"></div>

      {/* Simulated Date Loader */}
      <div className="bg-slate-300 w-1/3 h-5 rounded-md"></div>
    </div>
  );
};

export default SubLoadingCard;
