import React ,{useEffect,useState}from "react";

import { getOpportunities } from "../../api/opp/opportunity";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { NavLink } from "react-router";
import OppCard from "../../components/opportunity/OppCard";
const OppList = () => {
  const [opp,setOpp] =useState([])
 
  useEffect(()=>{
      getOpportunities().then((response)=>{
        setOpp(response.data)
      }).catch((error)=>{
        console.log(error)
      });
       
  },[])
  return (
    <>
    <div className="mx-12 max-w-screen-xl ">
   
   <div className=" relative my-2 ">
   <div className="">  <Title label="New Arrivals"  /></div>
    
  
   <NavLink to={`add`}>
   <button className="border-2 text-blue-500 border-black rounded-lg px-4 py-1 absolute right-0 top-0 bg-slate-100 hover:bg-slate-400">Add</button>
   </NavLink>
   </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  space-x-3 border-t">
    {
      opp.map((item,_id)=>{
       return (<OppCard key={_id} {...item}/>)
      })
    }
     
      </div>
      </div>
      <Footer/>
    
    
    </>
  );
};

export default OppList;
