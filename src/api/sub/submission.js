import axios from "axios"
import config from "../../config/config";
const authToken = localStorage.getItem("authToken");
// const getSubmission=async()=>{
//   try {
//   const response=  await axios.get(`${config.baseApiUrl}/api/submissions`)
 
//   return response
//   } 
//   catch (error) {
//     console.log(error)
//   }
// }
   const getSubmission = async ({
    limit = 10,
    sort = `{"createdAt":-1}`,
    filters = {},
  }) => {
    const query = `limit=${limit}&sort=${sort}&filters=${JSON.stringify(filters)}`;
    const response = await axios.get(
       `${config.baseApiUrl}/api/submissions?${query}`
    );
   
    return response;
  };
const getSubmissionById=async(id)=>{
  try {
  const response=await axios.get(`${config.baseApiUrl}/api/submissions/${id}`,{
    headers: {
      Authorization: `Bearer ${authToken}`,
    }})
  // console.log(response)
  return response
  } 
catch (error) {
    console.log(error)
  }
}
const getSubmissionType= async () => {
  return await axios.get(`${config.baseApiUrl}/api/opportunities/type`);
  
};

const addSubmission = async (data) => {
  const response = await axios.post(`${config.baseApiUrl}/api/submissions`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
};
const editSubmission = async (id, data) => {
  const response = await axios.put(`${config.baseApiUrl}/api/submissions/${id}`,data,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};
const deleteSubmission = async (id) => {
  const response = await axios.delete(`${config.baseApiUrl}/api/submissions/${id}`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};


export {getSubmission,getSubmissionType,getSubmissionById,addSubmission,editSubmission,deleteSubmission}

