import axios from "axios"
import config from "../../config/config";
const authToken = localStorage.getItem("authToken");
// const getOpportunities=async()=>{
//   try {
//   const response=  await axios.get(`${config.baseApiUrl}/api/opportunities`)
 
//   return response
//   } 
//   catch (error) {
//     console.log(error)
//   }
// }
   const getOpportunities = async ({
    limit = 10,
    sort = `{"createdAt":-1}`,
    filters = {},
  }) => {
    const query = `limit=${limit}&sort=${sort}&filters=${JSON.stringify(filters)}`;
    const response = await axios.get(
      `${config.baseApiUrl}/api/opportunities?${query}`
    );
    
    return response;
  };
const getOpportunityById=async(id)=>{
  try {
  const response=await axios.get(`${config.baseApiUrl}/api/opportunities/${id}`)
  // console.log(response)
  return response
  } 
catch (error) {
    console.log(error)
  }
}
const getOppType= async () => {
  return await axios.get(`${config.baseApiUrl}/api/opportunities/type`);
  
};

const addOpportunity = async (data) => {
  const response = await axios.post(`${config.baseApiUrl}/api/opportunities`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
};
const editOpportunity = async (id, data) => {
  const response = await axios.put(`${config.baseApiUrl}/api/opportunities/${id}`,data,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};
const deleteOpportunity = async (id) => {
  const response = await axios.delete(`${config.baseApiUrl}/api/opportunities/${id}`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};


export {getOpportunities,getOppType,getOpportunityById,addOpportunity,editOpportunity,deleteOpportunity}

// const getTypes = async () => {
//   return await axios.get(`${config.baseApiUrl}/api/opportunities/types`);
  
// };
// const getOppId = async (id) => {
//   const response = await axios.get(`${config.baseApiUrl}/api/Opps/${id}`);
//   return response;
// };



// const deleteOpp = async (id) => {
//   const response = await axios.delete(
//     `${config.baseApiUrl}/api/Opps/${id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     }
//   );
//   return response;
// };
// export { getOpps, getOppId, addOpp, editOpp, deleteOpp,getCategories };