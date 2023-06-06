import React from "react";
import { FiMonitor } from "react-icons/fi";
import { FaRegFileCode } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";

const Services = () => {
    return (
        <div className="md:mt-20 mt-20 w-full">
            <h3 className="text-secondary text-4xl ">
                {"<"} Services {"/>"}
            </h3>
            <h1 className="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5">
                What I Do for My Clients
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="shadow-lg bg-[#07072b] text-center p-10 rounded-lg flex flex-col row-span-2 justify-center items-center py-10">
                    <div className="w-16 h-16 rounded-full bg-[#432D92] p-3 mt-5">
                        <FaRegFileCode
                            style={{
                                position: "relative",
                                width: "70px",
                                height: "70px",
                                top: "-40",
                                right: "50",
                                color: "#00C0FF",
                            }}
                        />
                    </div>
                    <div className="mt-5">
                        <h3 className="text-3xl font-bold text-white border-white px-3 rounded-3xl">
                            {" Full-Stack Web Development"}
                        </h3>
                        <p className="mt-5 leading-9">
                            Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur
                            adipisicing eod tempor
                        </p>
                    </div>
                </div>
                <div className="shadow-lg bg-[#07072b] text-center p-10 rounded-lg  flex flex-col justify-center items-center py-10 ">
                    <div className="w-16 h-16 rounded-full bg-[#432D92] p-3 mt-5">
                        <RiCustomerService2Line
                            style={{
                                position: "relative",
                                width: "50px",
                                height: "50px",
                                top: "-30",
                                right: "30",
                                color: "#00C0FF",
                            }}
                        />
                    </div>
                    <div className="mt-5">
                        <h3 className="text-3xl font-bold text-white border-white px-3 rounded-3xl">
                            {"Programming Support"}
                        </h3>
                        <p className="mt-5 leading-9 md:leading-normal">
                            Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur
                            adipisicing eod tempor
                        </p>
                    </div>
                </div>
                <div className="shadow-lg bg-[#07072b] text-center p-10 rounded-lg row-span-2 flex flex-col justify-center items-center py-10">
                    <div className="w-16 h-16 rounded-full bg-[#432D92] p-3 mt-5">
                        <FiMonitor
                            style={{
                                position: "relative",
                                width: "70px",
                                height: "70px",
                                top: "-40",
                                right: "50",
                                color: "#00C0FF",
                            }}
                        />
                    </div>
                    <div className="mt-5">
                        <h3 className="text-3xl font-bold text-white border-white px-3 rounded-3xl">
                            {"Web Design"}
                        </h3>
                        <p className="mt-5 leading-9">
                            Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur
                            adipisicing eod tempor
                        </p>
                    </div>
                </div>
                <div className="shadow-lg bg-[#07072b] text-center p-10 rounded-lg  flex flex-col justify-center items-center py-10 ">
                    <div className="w-16 h-16 rounded-full bg-[#432D92] p-3 mt-5">
                        <FaChalkboardTeacher
                            style={{
                                position: "relative",
                                width: "50px",
                                height: "50px",
                                top: "-30",
                                right: "30",
                                color: "#00C0FF",
                            }}
                        />
                    </div>
                    <div className="mt-5">
                        <h3 className="text-3xl font-bold text-white border-white px-3 rounded-3xl">
                            {"Teaching Web Development"}
                        </h3>
                        <p className="mt-5 leading-9 md:leading-normal">
                            Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur
                            adipisicing eod tempor
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
