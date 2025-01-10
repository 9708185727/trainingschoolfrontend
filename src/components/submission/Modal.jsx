import React from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isOpen = false, setIsOpen, label, body, actions }) => {
  if (!isOpen) return null; // Avoid rendering anything if the modal is not open

  return (
    <>
      <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{label}</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close Modal"
            >
              <RxCross2 className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-4 text-gray-700">{body}</div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
            {actions}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
