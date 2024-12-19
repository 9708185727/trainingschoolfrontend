import React from "react";
import NavList from "../contants/Nav";
import { NavLink } from "react-router";
import { LOGIN_ROUTE } from "../contants/ListUrl";
import { FaSchool } from "react-icons/fa6";
function Header() {
  return (
    <>
      <div className="max-w-screen-xl mx-12 sticky top-0">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <li
           
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
             <FaSchool className="text-xl font-serif text-amber-400 w-10 h-10"/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-slate-500">
       TrainingSchool
              </span>
            </li>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a
                href="tel:9865809181"
                className="text-sm  text-gray-500 dark:text-white hover:underline"
              >
                9865809181
              </a>
              <li
       
                className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Logout
              </li>
            </div>
          </div>
        </nav>
        <nav className="bg-gray-300 rounded-lg ">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                {NavList.map(
                  (menu) => (
                    <li
                      key={menu.route} // Ensures a unique key for each list item
                      className="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      <NavLink to={menu.route}>{menu.label}</NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
