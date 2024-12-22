import React from "react";
import SignIn from "../../components/auth/SignIn";
import training from "../../assets/images/image.png"
import Footer from "../../components/Footer";
function Login() {
  return (
    <>
      <div className="max-w-screen-xl mx-12 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  border-l-2  border-gray-100">
       <SignIn/>
    
        <div>
          <img src= {training} alt="images error"  className="h-full w-full rounded-lg"/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Login;
