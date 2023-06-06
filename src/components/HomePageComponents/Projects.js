import React, { useState } from "react";
import { FaRegFileCode } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton";
import Error from "../Error/Error";
import ProjectCard from "./ProjectCard";
import './Banner.css'
const Projects = ({ projects, isLoading, isError, error, slice }) => {
    // console.log(projects);
    const [filterOption, setFilterOption] = useState();
    const [searchOption, setSearchOption] = useState();
    // console.log(typeof filterOption);

    const filterHandler = (option) => {
        if (option !== "") {
            setFilterOption(option);
        }
        if (option === "") {
            setFilterOption(false);
        }
    };
    const searchHandler = (query) => {
        if (query) {
            // console.log(query)
            setSearchOption(query);
        }
        if (query === "") {
            setSearchOption(false);
        }
    };

    let content;

    if (isLoading) content = <Skeleton />;
    if (isError) content = <Error error={error} />;
    if (!isError && !isLoading && !filterOption) {
        // console.log(projects);
        const newProjects = [...projects];
        const reversedProjects = newProjects.reverse();

        content = (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {reversedProjects?.slice(0, slice).map((project) => {
                    // console.log(project);

                    return <ProjectCard project={project} key={project._id} />;
                })}
            </div>
        );
    }


    //  filtered data render------------>

    if (!isError && !isLoading && filterOption) {
        const newProjects = [...projects];
        const reversedProjects = newProjects.reverse();
        const filteredData = reversedProjects.filter((data) => data.project_type === filterOption);

        content = (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {filteredData?.slice(0, slice).map((project) => {
                    console.log(project);

                    return <ProjectCard project={project} />;
                })}
            </div>
        );
    }
    //  filtered data render------------>

    //  searched data render------------>
    if (!isError && !isLoading && searchOption) {
        console.log(searchOption);
        // const newProjects = [...projects];
        // const reversedProjects = newProjects.reverse();
        const filteredData = projects.filter((data) => {
            console.log(data.name.toLowerCase());
            return data.name.toLowerCase().includes(searchOption.toLowerCase());
        });
        console.log(filteredData);
        content = (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {filteredData?.slice(0, slice).map((project) => {
                    console.log(project);

                    return <ProjectCard project={project} />;
                })}
            </div>
        );
    }
    //  searched data render------------>

    return (
        <div className="md:mt-20 mt-20 w-full">
            <h3 className="text- text-4xl ">
                {"<"} Projects {"/>"}
            </h3>
            <h1 className="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5 text uppercase">
                What I Did for my client
            </h1>

            <Filter filterHandler={filterHandler} searchHandler={searchHandler} />

            {content}
        </div>
    );
};

export default Projects;
