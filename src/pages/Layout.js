import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ServicePage from './ServicePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import AdminPage from "./AdminPage";

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/skills" element={<SkillsPage />}></Route>
                <Route path="/services" element={<ServicePage />}></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="/super-admin" element={<AdminPage />}></Route>
            </Routes>
        </div>
    );
};

export default Layout;
