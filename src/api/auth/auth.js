import axios from "axios";
const BaseApiUrl = "http://localhost:5000";
const Login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BaseApiUrl}/api/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const Register = async (data) => {
  try {
    const response = await axios.post(`${BaseApiUrl}/api/auth/register`, {
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
