import React ,{useState,useEffect}from 'react'
import { getOpportunityById } from "../../api/opp/opportunity";

import Footer from '../../components/Footer';
import { useParams, useNavigate } from 'react-router';
const OppDetailView = () => {
const navigate=useNavigate()
  const [opp,setOppById] =useState(null)
  const [loading,setloading]=useState(true)
  const params=useParams()
 
    useEffect(()=>{
        getOpportunityById(params.id).then((response)=>{
          setOppById(response.data);
          setloading(false);
        }).catch((error)=>{
          console.log(error)
        });
         
    },[])
  if(loading) return <div className='mt-48 ms-96 text-lime-600 '>Opportunity loading...</div>
  return (
    <>

     <div className="mx-12 max-w-screen-xl  space-x-1">
   
       <button
              onClick={() => navigate(-1)} // Go back to the previous page
              className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Go Back
            </button>
      <div className="max-w-full mt-3 grid grid-cols-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className=''>
    <img className="rounded-t-lg min-h-48 w-full  " src={opp.url} alt="error"/>
    
  </div>
  <div className="p-5 ">
    
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{opp.title}</h1>
    <h2 className='mb-2 text-1xl font-semibold tracking-tight text-gray-500 dark:text-white'>{opp.type}</h2>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-8">{opp.description}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-8">
  {opp.deadline
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(opp.deadline))
    : "No deadline provided"}
</p>

{/* <p className='my-3'>Rs.{Math.floor(9000)*0.2}
  <sub className='line-through ml-2 text-red-400 '>Rs.9000</sub>
</p> */}
   <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Enroll now
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </button>
 
  </div>
  
</div>


<Footer/>
      </div>
    </>
  )
}

export default OppDetailView
