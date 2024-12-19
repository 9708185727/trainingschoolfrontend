import React from 'react'
import SignUp from '../../components/auth/SingUp'
import reg from "../../assets/images/lap.png"
const Register = () => {
  return (
    <>
       <div className="mx-12 max-w-screen-xl mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       <SignUp/>
    
        <div>
          <img src= {reg} alt="images error"  className="h-full w-full rounded-sm"/>
        </div>
      </div>
    
    </>
 
  )
}

export default Register
