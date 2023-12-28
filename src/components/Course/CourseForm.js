// CourseForm.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CourseForm = () => {



//     fetch('https://assignment-11-server-blush.vercel.app/review', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(review)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             if (data.acknowledged) {
//                 toast.success('Review Placed Successfully')
//                 form.reset();
//             }
//         })

//         .catch(err => console.error(err));
// }






  const [formData, setFormData] = useState({
    
    name: '',
    description: '',
    price: '',
    duration: '',
    level: '',
    topics: [],
    schedule: {
      startDate: '',
      endDate: '',
      classDays: [],
      classTime: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTopicsChange = (selectedTopics) => {
    setFormData((prevData) => ({
      ...prevData,
      topics: selectedTopics,
    }));
  };

  const handleClassDaysChange = (selectedClassDays) => {
    setFormData((prevData) => ({
      ...prevData,
      schedule: {
        ...prevData.schedule,
        classDays: selectedClassDays,
      },
    }));
  };
  



// // Function to dynamically obtain the access token
const getAccessToken = () => {
  // Retrieve the access token from storage (e.g., local storage)
  return localStorage.getItem('access_token');
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Obtain the access token
    const accessToken = getAccessToken();

    const response = await fetch('https://raineritb.vercel.app/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const createdCourse = await response.json();
      console.log('Course created:', createdCourse);
      toast.success('Course created successful')
      // Handle success (e.g., redirect, show a success message)
    } else {
      console.error('Failed to create course:', response.statusText);
    
      // Handle error (e.g., show an error message)
    }
  } catch (error) {
    console.error('Error:', error.message);
    // Handle unexpected errors
  }
};


  

  return (
    <div>
<h1 className='text-xl font-semibold py-2'>This is Course Add Form</h1>
<form onSubmit={handleSubmit} className="max-w-xl mx-auto my-8">
      {/* Course Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Course Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-600">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Duration */}
      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-600">
          Duration
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Level */}
      <div className="mb-4">
        <label htmlFor="level" className="block text-sm font-medium text-gray-600">
          Level
        </label>
        <input
          type="text"
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Topics */}
      <div className="mb-4">
        <label htmlFor="topics" className="block text-sm font-medium text-gray-600">
          Topics (Comma-separated)
        </label>
        <input
          type="text"
          id="topics"
          name="topics"
         value={formData.topics}
          onChange={handleTopicsChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Schedule Start Date */}
      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">
          Schedule Start Date
        </label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleClassDaysChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Schedule End Date */}
      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">
          Schedule End Date
        </label>
        <input
          type="text"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleClassDaysChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Schedule Class Days */}
      <div className="mb-4">
        <label htmlFor="classDays" className="block text-sm font-medium text-gray-600">
          Schedule Class Days (Comma-separated)
        </label>
        <input
          type="text"
          id="classDays"
          name="classDays"
          value={formData.classDays}
          onChange={handleTopicsChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Schedule Class Time */}
      <div className="mb-4">
        <label htmlFor="classTime" className="block text-sm font-medium text-gray-600">
          Schedule Class Time
        </label>
        <input
          type="text"
          id="classTime"
          name="classTime"
          value={formData.classTime}
          onChange={handleClassDaysChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white px-6 mx-4 hover:bg-gray-500 py-3 rounded-md">
        Add Course
      </button>
    </form>

    </div>
  );
};

export default CourseForm;
