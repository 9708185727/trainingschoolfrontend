import React ,{useEffect,useState}from "react";
import Opportunity from "../../components/opportunity/Opportunity";
import { getOpportunities } from "../../api/opp/opportunity";
const Opportunities = () => {
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
      <div className="mx-12 max-w-screen-xl grid grid-cols-3 space-x-1">
    {
      opp.map((item,_id)=>{
       return (<Opportunity key={_id} {...item}/>)
      })
    }
     
      </div>
    </>
  );
};

export default Opportunities;
