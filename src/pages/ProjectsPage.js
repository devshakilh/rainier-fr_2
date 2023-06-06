import React from "react";
import Projects from "../components/HomePageComponents/Projects";
import { useGetProjectsQuery } from "../features/projects/projectsApi";

const ProjectsPage = () => {
    
    const { data: projects, isLoading, isError, error } = useGetProjectsQuery();
    // console.log(projects);
    
    return (
        <div>
            <Projects
                projects={projects}
                isLoading={isLoading}
                isError={isError}
                error={error}
                
            />
        </div>
    );
};

export default ProjectsPage;
