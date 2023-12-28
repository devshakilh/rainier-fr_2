// CourseDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DotLoader } from 'react-spinners';

const CourseDetailsPage = () => {
  const { coursesId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => { 
      try {
        const response = await axios.get(`https://raineritb.vercel.app/api/courses/${coursesId}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error.message);
      }
    };

    fetchCourseDetails();
  }, [coursesId]);

  if (!course) {
    return <DotLoader  color="#36d7b7" />;
  }

  return (  
    <div className='min-h-screen items-center justify-center flex my-6 lg:my-12'>

<div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<h2 className='text-4xl font-bold py-4 text-blue-700'> Course Details</h2>
      <a >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-white"><span className='text-xl font-semibold'></span>{course.name}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-xl font-semibold'>Description: </span>{course.description}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-xl font-semibold'>Price: </span>{course.price}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-xl font-semibold'>Duration: </span>{course.duration}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-xl font-semibold'>Level: </span>{course.level}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-xl font-semibold'>Topics:</span>{course.topics}</p>
     
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-xl font-semibold'>StartTime:</span>{course.schedule.startDate}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className='text-xl font-semibold'>EndTime:</span> {course.schedule.endDate}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-xl font-semibold'>ClassDays:</span> {course.schedule.classDays}</p>
     
      <p className="mb-3 font-normal  dark:text-gray-400"><span className='text-xl font-semibold'>ClassTime:</span> {course.schedule.classTime}</p>
     
    </div>
    
 
    </div>
  );
};

export default CourseDetailsPage;
