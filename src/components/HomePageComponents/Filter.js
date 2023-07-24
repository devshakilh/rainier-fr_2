import React, { useEffect, useState } from "react";

const Filter = ({ filterHandler, searchHandler }) => {
    const [active, setActive] = useState("");
    const activeHandler = (e) => {
        setActive(e.target.id);
    };

    useEffect(() => {
        setActive("All");
    }, []);
    return (
        <div className="mt-10">
            <div className="flex flex-row flex-wrap justify-between items-center gap-5">
                <ul className="flex flex-row gap-5 flex-wrap justify-center items-center">
                    <li data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <button
                            className={`border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-[#07072b] font-bold ${active === "All" ? "active-btn" : undefined
                                }`}
                            id="All"
                            onClick={(e) => {
                                activeHandler(e)
                                filterHandler()
                            }}
                        >
                            All
                        </button>
                    </li>
                    <li data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1800">
                        <button
                            className={`border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-[#07072b] font-bold ${active === "Fullstack" ? "active-btn" : undefined
                                }`}
                            id="Fullstack"
                            onClick={(e) => {
                                activeHandler(e)
                                filterHandler("fullstack")
                            }}
                        >
                            Fullstack
                        </button>
                    </li>
                    <li data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2100">
                        <button
                            className={`border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-[#07072b] font-bold ${active === "Frontend" ? "active-btn" : undefined
                                }`}
                            id="Frontend"
                            onClick={(e) => {
                                activeHandler(e)
                                filterHandler("frontend")
                            }}
                        >
                            Frontend
                        </button>
                    </li>
                    <li data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2500">
                        <button
                            className={`border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-[#07072b] font-bold ${active === "Backend" ? "active-btn" : undefined
                                }`}
                            id="Backend"
                            onClick={(e) => {
                                activeHandler(e)
                                filterHandler("server")
                            }}
                        >
                            Backend
                        </button>
                    </li>
                    <li data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2900">
                        <button
                            className={`border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-[#07072b] font-bold ${active === "Design" ? "active-btn" : undefined
                                }`}
                            id="Design"
                            onClick={(e) => {
                                activeHandler(e)
                                filterHandler("design")
                            }}
                        >
                            Design
                        </button>
                    </li>
                </ul>
                <div className="form-control" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500">
                    <input
                        type="text"
                        placeholder="Search by project's name"
                        className="input input-bordered bg-[#c5f0ff] text-primary font-bolder"
                        onChange={(e) => {
                            console.log(e.target.value)
                            searchHandler(e.target.value)
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filter;
