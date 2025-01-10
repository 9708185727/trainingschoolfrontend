import React from "react";

import Title from "../components/Title";

import Footer from "../components/Footer";

const About = () => {
  return (
    <>
   
        <div className="max-w-screen-xl mx-12 shadow-lg rounded-lg p-4">
          <Title label="About Us" />

          <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   ">
            <div>
              <h2 className="mt-8 mb-4 text-2xl text-teal-400">Introduction</h2>
              <p className="text-justify  pr-5">
                Welcome to <span className="self-center text-xl ms-2 font-semibold whitespace-nowrap dark:text-white text-slate-500">
              TrainingSchool
              </span>, your one-stop destination for all
                your shopping needs. Our mission is to provide a seamless
                shopping experience, offering high-quality products at
                competitive prices.
              </p>
            </div>
            <div>
              <h2 className="mt-8 mb-4 text-2xl text-teal-400">Our Mission</h2>
              <p className="text-justify ">
                We aim to simplify the shopping process by offering a wide range
                of products that cater to every lifestyle. From the latest
                fashion trends to essential home goods, we ensure fast delivery
                and excellent customer service.
              </p>
            </div>
            <div className="ms-3">
              <h2 className="mt-8 mb-4 text-2xl text-teal-400">
                Why Choose Us?
              </h2>
              <ul>
                <li>Vast selection of top-quality products</li>
                <li>Secure and easy payment methods</li>
                <li>Fast shipping and hassle-free returns</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
            <div >
              <h2 className="mt-8 ms-2 mb-4 text-2xl text-teal-400">
                Our Commitment to You
              </h2>
              <p>
                At <span className="self-center text-xl ms-2 font-semibold whitespace-nowrap dark:text-white text-slate-500">
              TrainingSchool
              </span>, we value our customers and strive to deliver
                an unparalleled shopping experience. We are always here to
                assist you in finding exactly what you need and ensuring your
                satisfaction.
              </p>
            </div>
      
        </div>
          </div> 
    
    
      <Footer/>
     
   
    </>
  );
};

export default About;
