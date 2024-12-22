import axios from "axios";

import config from "../../config/config";
const Login = async ({email,password}) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/login`,{
    email,
    password,
  });
  return response;
};

const Register = async (data) => {
  try {
    const response = await axios.post(`${config.baseApiUrl}/api/auth/register`, {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: data.role,
      profile: {
        bio: data.bio,
        resume: data.resume,
        participationHistory: [data.participationHistory],
      },
    });
    return response; // Return response data for the caller to handle
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

export { Login, Register };
