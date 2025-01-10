
import React from "react";
import { FaSchool } from "react-icons/fa6";
const ServicePage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Welcome to  <FaSchool className="text-xl font-serif text-amber-400 w-10 h-10 mt-2 mb-5 inline " /> <span className="self-center text-2xl ms-2 font-semibold whitespace-nowrap dark:text-white text-slate-500">
                      TrainingSchool
                      </span></h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Empowering Your Future with Unique Opportunities
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Job Opportunities</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Connect with top companies seeking skilled candidates.</li>
              <li>Gain access to exclusive job postings tailored to your expertise.</li>
              <li>Benefit from personalized career guidance and resume-building workshops.</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Hackathons</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Participate in exciting challenges to showcase your skills.</li>
              <li>Collaborate with peers and industry mentors.</li>
              <li>Win rewards, recognition, and opportunities to work on real-world projects.</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Internships</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Secure internships at leading organizations.</li>
              <li>Get hands-on experience in your field of interest.</li>
              <li>Learn and grow under the guidance of industry experts.</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Quizzes</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Test your knowledge and enhance your learning through interactive quizzes.</li>
              <li>Compete with peers and climb the leaderboard.</li>
              <li>Earn certificates and showcase your expertise.</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Student Enrollment</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Enroll in a wide range of courses designed to equip you with in-demand skills.</li>
              <li>Gain access to mentorship programs and expert faculty.</li>
              <li>Join a thriving community of learners and achievers.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Us?</h3>
          <ul className="text-lg text-gray-600 list-disc list-inside mx-auto max-w-3xl">
            <li>Comprehensive Platform: One-stop destination for career, learning, and competition.</li>
            <li>Expert Mentorship: Learn from industry professionals and experienced educators.</li>
            <li>Real-World Exposure: Work on practical projects and real-life challenges.</li>
            <li>Community Support: Be part of a supportive and inspiring community.</li>
            <li>Recognition: Earn certificates, awards, and career opportunities.</li>
          </ul>
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700">
            Enroll Now
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md shadow hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

