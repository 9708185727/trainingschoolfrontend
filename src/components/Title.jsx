import React from 'react'

const Title = ({label,className}) => {
  return (
    <>
    <h1 className={`text-blue-500 font-semibold text-3xl  mb-2 ${className}`}>
        {label}
    </h1>
      
    </>
  )
}

export default Title
