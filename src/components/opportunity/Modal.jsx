import React from "react";
import Title from "../Title";
import { RxCross2 } from "react-icons/rx";
const Modal = ({isOpen=false,setIsOpen,label,body,actions}) => {
   
  return (
    <>
     <div className={isOpen?"block":"hidden"}>
     <div className="h-svh w-full bg-slate-500 fixed left-0 top-0 z-50 bg-opacity-50 flex items-center justify-center shadow-lg">
        <div className="w-full md:w-1/2 min-h-40 px-12 py-10 bg-white rounded-lg">
          <div className="flex text-center justify-between">
            <Title label={label} />
            <button onClick={()=>setIsOpen(false)}>
              <RxCross2 />
            </button>
          </div>
          <div className="py-6">
            {body}
          </div>
          <div className="flex justify-between">
            {actions}
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Modal;
