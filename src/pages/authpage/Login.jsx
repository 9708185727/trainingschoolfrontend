import React from "react";
import SignIn from "../../components/auth/SignIn";
import laptop from "../../assets/images/lap.png"
function Login() {
  return (
    <>
      <div className="mx-12 max-w-screen-xl mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       <SignIn/>
    
        <div>
          <img src= {laptop} alt="images error"  className="h-full w-full rounded-sm"/>
        </div>
      </div>
    </>
  );
}
export default Login;
