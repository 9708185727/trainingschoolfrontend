import React, {  useState } from 'react'
import { Link, NavLink } from 'react-router'
import { toast } from 'react-toastify';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { deleteOpportunity } from '../../api/opp/opportunity';
import { getAllOpportunity } from '../../redux/opportunity/oppActions';

import Modal from './Modal';

const OppCard = (props) => {
  const {_id,title,type,description,deadline,url}=props;
  const {user: currentUser } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  
  const canEditOnlyAdmin =currentUser._doc?.role === 'Admin';
  const canEdit = currentUser._doc?.role !=='Participant';
  async function removeOpp() {
    
      setIsOpen(true);
    }
  
    async function confirmDelete() {
      try {
        await deleteOpportunity(_id);
        dispatch(getAllOpportunity({}));
        toast(`Opportunity  deleted successfully`, {
          type: "success",
          outoClose: 1500,
        });
      } catch (error) {
        toast(error.response.data, {
          type: "error",
          outoClose: false,
        });
      } finally {
        setIsOpen(false);
      }
    }

 
  return (
    <>
   
<div key={_id} className="max-w-sm mt-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div >
    <img className="rounded-t-lg min-h-96 " src={url} alt="error"/>
    
  </div>
  <div className="p-5 ">
  
      <h1 className="mb-2 min-h-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h1>
    
    <h2 className='mb-2 text-1xl font-semibold tracking-tight text-gray-500 dark:text-white'>{type}</h2>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-14">{description}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-8">
  {deadline
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(deadline))
    : "No deadline provided"}
</p>

 <div>
 <NavLink to={_id}>
   <button  className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </button>
   </NavLink>
   {
    canEditOnlyAdmin?(<button onClick={removeOpp} className='items-center sm:ml-1 md:ml-3 lg:ml mt-1 text-sm font-medium text-center  float-end'><MdDeleteForever className='text-red-500 font-semibold w-6 h-6'/></button>):("")
   }
 
    
   {canEdit?(<Link to={`edit/${_id}`}><button  className=' items-center text-sm mt-1 font-medium text-center  float-end' ><FaRegEdit className='text-cyan-500 font-semibold w-6 h-6'/></button></Link>):("")}
  
 </div>
 
  </div>
</div>
<Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        label="Delete Product"
        body={<p>Are you sure you want to delete this product?</p>}
        actions={
          <button className="bg-red-500 text-white" onClick={confirmDelete}>
            Confirm
          </button>
        }
      />
    </>
  )
}

export default OppCard 


