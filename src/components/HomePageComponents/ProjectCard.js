import React from 'react';

const ProjectCard = ({ project }) => {
    const { _id, name, img, live_link, frontend_link, server_link, features, project_type } =
        project || {};
    return (
        <div className="shadow-lg bg-[#07072b] text-center p-5 rounded-lg flex flex-col justify-center items-center py-10" data-aos="flip-right">
            <div className="mt-3">
                <h3 className="text-3xl font-bold text-white border-white px-3 rounded-3xl">
                    {name}
                </h3>
                <h3 className="text-xl font-bold text-secondary border-white px-3 rounded-3xl">
                    ({project_type})
                </h3>
                <div className="mt-3 flex flex-wrap justify-center items-center text-start h-24">
                    <div className="bg-[#07072b] p-3 rounded-lg">
                        {features?.map((feature, index) => (
                            <div className="badge text-secondary badge-sm p-2 mx-1 rounded-md" key={index}>
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-52 mt-5 overflow-hidden hover:overflow-hidden rounded-lg bg-white">
                <div
                    className="w-full h-full bg-cover bg-no-repeat bg-animation"
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                ></div>
            </div>

            <div className="flex flex-wrap flex-row items-center md:justify-center justify-center w-full">
                {live_link !== "" && (
                    <button className="group relative h-10 w-24 overflow-hidden rounded-lg bg-white shadow mt-5 px-1 mx-1">
                        <a href={live_link} target="_blank" rel="noreferrer">
                            <div className="absolute inset-0 w-1 bg-[#07072b] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-primary group-hover:text-white text-xs font-bold">
                                Live Site
                            </span>
                        </a>
                    </button>
                )}
                {frontend_link !== "" && (
                    <button className="group relative h-10 w-24 overflow-hidden rounded-lg  bg-white shadow mt-5 px-1 mx-1">
                        <a href={frontend_link} target="_blank" rel="noreferrer">
                            <div className="absolute inset-0 w-1 bg-[#07072b] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-xs font-bold text-primary group-hover:text-white">
                                Client Code
                            </span>
                        </a>
                    </button>
                )}
                {server_link !== "" && (
                    <button className="group relative h-10 w-24 overflow-hidden rounded-lg bg-white shadow mt-5 px-1 mx-1">
                        <a href={server_link} target="_blank" rel="noreferrer">
                            <div className="absolute inset-0 w-1 bg-[#07072b] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-primary group-hover:text-white text-xs font-bold">
                                Server Code
                            </span>
                        </a>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;