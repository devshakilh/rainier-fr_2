import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";


import ProjectsPage from './CourseDetails';

import AdminPage from "./AdminPage";
import Login from "./Login";
import Register from "./Register";
import CourseForm from "../components/Course/CourseForm";

import CourseDetailsPage from "./CourseDetails";
// import Error from "../components/Error/Error";

const Layout = () => {
    return (
        <div>
            <Routes>


                {/* <Route path="/" errorElement={<Error />}></Route> */}
                <Route path="/" element={<HomePage />}></Route>
              
                {/* <Route path="/course" element={<ServicePage />}></Route> */}
                <Route path="/projects" element={<ProjectsPage />}></Route>
              
                <Route path="/login" element={<Login />}></Route>
                
                <Route path="/register" element={<Register />}></Route>
                <Route path="/addcourse" element={<CourseForm />}></Route>
               
               
                <Route path="/courses/:coursesId"
                 element={<CourseDetailsPage />}   > 
                 
                  </Route>
              
                <Route path="/super-admin" element={<AdminPage />}></Route>
            </Routes>
        </div>
    );
};

export default Layout;
