import axios from "axios"
const BaseApiUrl="http://localhost:5000"
const getOpportunities=async()=>{
  try {
  const response=  await axios.get(`${BaseApiUrl}/api/opportunities`)
  console.log(response)
  return response
  } 
  catch (error) {
    console.log(error)
  }
}
export {getOpportunities}