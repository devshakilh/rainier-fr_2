import React from "react";
import Banner from "../components/HomePageComponents/Banner";
import About from "../components/HomePageComponents/About";
import Skills from "../components/HomePageComponents/Skills";
import Services from "../components/HomePageComponents/Services";
import Projects from "../components/HomePageComponents/Projects";
import Contact from "../components/HomePageComponents/Contact";
import { Link } from "react-router-dom";
import Footer from "../components/HomePageComponents/Footer";
import { useGetProjectsQuery } from "../features/projects/projectsApi";

const HomePage = () => {
    const { data: projects, isLoading, isError, error } = useGetProjectsQuery();

    if (isLoading) {
        <div>Loading...</div>;
    }
    if (projects) {
        <Projects />
    }
    if (isError) {

    }


    if (error) {
        return <>Error: Something {"wen't"} wrong</>;
    }
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Services />
            <Projects
                projects={projects}
                isLoading={isLoading}
                isError={isError}
                error={error}
                slice={3}
            />
            <div className="mt-10">
                <button className="group relative h-10 w-full md:w-52 overflow-hidden rounded-lg bg-white shadow mt-5 px-1 mx-1">
                    <Link to="/projects">
                        <div className="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-primary group-hover:text-white text-lg font-bold">
                            See all projects
                        </span>
                    </Link>
                </button>
            </div>
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;