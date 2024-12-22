import React from 'react'
import SignUp from '../../components/auth/SingUp'

import training from "../../assets/images/image.png"
import Footer from '../../components/Footer'
const Register = () => {
  return (
    <>
       <div className="mx-12 max-w-screen-xl mt-2   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-l-2  border-gray-100">
       <SignUp/>
    
        <div>
          <img src= {training} alt="images error"  className="h-full w-full  rounded-lg border-x-2 "/>
        </div>
      </div>
    <Footer/>
    </>
 
  )
}

export default Register
