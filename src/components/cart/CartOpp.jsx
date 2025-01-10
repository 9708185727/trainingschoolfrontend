import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RemoveOppFromCart } from "../../redux/cart/cartSlice";

const CartOpp = ({ id, title, type,quantity=1 }) => {
 
  const dispatch = useDispatch();

  // Handle removing item from cart
  const handleRemoveFromCart = () => {
    dispatch(RemoveOppFromCart(id));
  };
  

  return (
   <>
    <div className="space-y-4 p-2 my-2">
      <div className="bg-white flex justify-between items-center p-4 shadow-md rounded-lg">
        {/* Cart item details */}
        <div className="flex flex-col  text-gray-800">
          <h2 className="sn:text-lg sm:text-md md:font-semibold md:text-lg lg:font-semibold">{title}</h2>
          <span className="text-sm text-gray-500">{type}</span>
        </div>
        
        {/* Quantity and Delete */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">{quantity}</span> {/* Replace with dynamic quantity */}
          <button
            onClick={handleRemoveFromCart}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200"
            title="Remove from Cart"
          >
            <MdDelete className="text-red-500 text-xl" />
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default CartOpp;
