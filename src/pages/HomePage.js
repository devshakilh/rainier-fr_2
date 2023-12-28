import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";





const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get("https://raineritb.vercel.app/api/courses", { withCredentials: true })
      .then((res) => setCourses(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  console.log(courses);

  return (
    <div className="min-h-screen">


      {error && <p className="text-danger">{error}</p>}
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {courses.map((course) => (
          <div key={course._id} className=" my-20  ">
            
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.name}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.description}</p>
      <Link to={`/courses/${course._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View Details
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </div>
            
            </div>
        ))}
      </ul>



    </div>
  );
};

export default HomePage;
