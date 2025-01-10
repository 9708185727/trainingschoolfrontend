import axios from "axios";

import config from "../../config/config";
const Login = async ({email,password}) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/login`,{
    email,
    password,
  });
  return response;
};

const Register = async (formData) => {
  try {
    const response = await axios.post(
      `${config.baseApiUrl}/api/auth/register`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};


export { Login, Register };
