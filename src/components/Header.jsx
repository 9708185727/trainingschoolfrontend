import React, { useState } from "react";
import NavList from "../contants/Nav";
import { NavLink } from "react-router";

import { FaSchool } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";

function Header() {
  const [isHidden, setHidden] = useState(true);
  const { user } = useSelector((state) => state.auth);

  const isAuthenticated = user ? true : false;
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutUser());
  }
  return (
    <>
      <div className="max-w-screen-xl mx-12 ">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <FaSchool className="text-xl font-serif text-amber-400 w-10 h-10" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-slate-500">
                TrainingSchool
              </span>
            </li>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              {user ? (
                <div>
                  <li className="text-sm  text-gray-500 dark:text-white inline">
                    <h1 className="inline text-cyan-500"> {user._doc.name}</h1>
                    <h1 className="inline text-green-700 ml-2 uppercase">
                      ({user._doc.role})
                    </h1>
                  </li>
                  <button
                    className="text-sm ml-8 text-blue-600 dark:text-blue-500 hover:underline"
                    type="button"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </nav>

        <nav class="bg-white  border-gray-300  dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
              onClick={() => setHidden(!isHidden)}
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              class={`w-full md:block md:w-auto ${isHidden ? "hidden" : ""}`}
              id="navbar-default"
            >
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {NavList.filter((menu) => menu.auth === isAuthenticated).map(
                  (menu) => (
                    <li
                      key={menu.route}
                      className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-400 md:p-0 dark:text-white md:dark:text-blue-500"
                    >
                      <NavLink
                        to={menu.route}
                        className={({ isActive }) =>
                          isActive
                            ? "text-white bg-blue-500 px-2 rounded-md py-1"
                            : "text-blue-400 bg-white font-bold"
                        }
                      >
                        {menu.label}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
        <hr/>
      </div>
    </>
  );
}

export default Header;
