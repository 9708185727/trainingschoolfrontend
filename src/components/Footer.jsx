import React from "react";
import { NavLink } from "react-router-dom";
import { FaSchool } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";

import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  SERVICE_ROUTE,
} from "../contants/ListUrl";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className=" mx-8 md:mx-20 lg:mx-20  grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 ">
        <div className=" my-3  max-w-auto max-h-auto  ">
          <FaSchool className="text-xl font-serif text-amber-400 w-10 h-10 mt-2 mb-7 inline " /> <span className="self-center text-2xl ms-2 font-semibold whitespace-nowrap dark:text-white text-slate-500">
              TrainingSchool
              </span>
          <p className="text-md text-justify px-2">
            Perfect for gaming, dynamic hackathons, internship and those
            training for internships Level up your gaming experience with
            thrilling challenges and competitive events tailored for innovation
            with dynamic hackathons designed to inspire creativity and
            collaboration. Test your knowledge and sharpen your skills with
            engaging and interactive quizzes.{" "}
          </p>
          <p className="mt-2 text-1xl font-semibold">
            Location:New Baneshower, Kathamandu
          </p>
        </div>

        <div className="ms-2 md:ms-14 lg:ms-14 my-2 p-2   max-w-auto max-h-auto ">
          <h1 className="my-3 font-semibold text-2xl">Useful Links</h1>
          <ul className="space-y-7 mt-8">
            <NavLink to={HOME_ROUTE}>
              <li className="hover:text-slate-500 mb-5">Home</li>
            </NavLink>
            <NavLink to={ABOUT_ROUTE}>
              <li className="hover:text-slate-500 mb-5">About Us</li>
            </NavLink>
            <NavLink to={SERVICE_ROUTE}>
              <li className="hover:text-slate-500 mb-5">Services</li>
            </NavLink>
            <NavLink to={CONTACT_ROUTE}>
              <li className="hover:text-slate-500 ">Contact</li>
            </NavLink>
            <li className="hover:text-slate-500">Events</li>
            <li className="hover:text-slate-500">FQA</li>
          </ul>
        </div>
        <div className="ms-2 my-2 p-2  max-w-auto max-h-auto ">
          <h1 className="my-3 font-semibold text-2xl">Main Opportunities</h1>
          <ul className="space-y-7 mt-8">
            <NavLink to={HOME_ROUTE}>
              <li className="hover:text-slate-500">Hackathons</li>
            </NavLink>
            <li className="hover:text-slate-500">Jobs</li>
            <li className="hover:text-slate-500">Quize</li>
            <li className="hover:text-slate-500">Internship</li>
          </ul>
        </div>
        <div className="ms-2 my-3 p-2   max-w-auto max-h-auto ">
          <h1 className="my-3 font-semibold text-2xl">Contact Us</h1>
          <ul className="space-y-6 mt-8">
            <li>
              <a href="mailto:Shopifyghar@gmail.com">
                trainingschool@gmail.com
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:9865809181"> 9865809181</a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/vgrd9YWgUmRUaFBQ6">
                <CiLocationOn className="inline text-green-700" /> Training
                School New Baneshower,Kathamandu,nepal
              </a>
            </li>

            <div className=" mt-8 ">
              <FaFacebook className=" bg-white text-blue-600 inline" />
              <TiSocialTwitter className="ml-2 inline bg-white text-blue-600" />
              <TiSocialSkype className="ml-2 inline bg-white text-red-600 " />
              <PiInstagramLogoLight className="ml-2 inline bg-white text-red-600 " />
            </div>
          </ul>
        </div>
      </div>
      <footer className="my-2 w-full text-center float-right ">
        &copy;2024. All Rights Reserved
      </footer>
    </>
  );
};

export default Footer;
