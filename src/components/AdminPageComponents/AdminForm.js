import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFeature } from "../../features/admin/adminSlice";
import { usePostProjectsMutation } from "../../features/projects/projectsApi";
import ProjectsPage from "../../pages/ProjectsPage";
import { toast } from 'react-toastify';

const AdminForm = () => {
    const [project, { data: updatedData, isLoading, error: responseError }] =
        usePostProjectsMutation();
    const [feature, setFeature] = useState("");
    const allFeatures = useSelector((state) => state.adminSlice);
    const dispatch = useDispatch();
    const nameRef = useRef();
    const imgRef = useRef();
    const liveLinkRef = useRef();
    const clientLinkRef = useRef();
    const serverLinkRef = useRef();
    const typeRef = useRef();


    const featuresHandler = (e) => {
        // console.log(e)
        setFeature(e.target.value);
    };

    const addFeatureHandler = (e) => {
        e.preventDefault()
        // console.log(e.target)
        dispatch(addFeature(feature));
        e.target.reset()
    };
    // console.log(allFeatures.features);

    const addProjectHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const live_link = liveLinkRef.current.value;
        const frontend_link = clientLinkRef.current.value;
        const server_link = serverLinkRef.current.value;
        const project_type = typeRef.current.value;
        const features = allFeatures.features;

        console.log({
            name,
            img,
            live_link,
            frontend_link,
            server_link,
            project_type,
            features,
        });
        const data = {
            name,
            img,
            live_link,
            frontend_link,
            server_link,
            project_type,
            features,
        }

        project(data)
        e.target.reset()
    };

    useEffect(() => {
        if (updatedData?.status === "Successful") {
            toast.success("Project posted successfully")
        }
        if (responseError) {
            toast.error(responseError)
        }
    }, [updatedData?.status, responseError])

    return (
        <div>
            <div className="md:max-w-2xl w-full mx-auto bg-none mt-20">
                <div>
                    <ul className="flex flex-row flex-wrap">
                        {allFeatures.features.map((feature, index) => (
                            <li className="badge text-secondary badge-sm p-2 mx-1 rounded-md" key={index}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <form onSubmit={addFeatureHandler}>
                    <div className="flex flex-row justify-center items-center relative">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        ></label>
                        <input
                            onChange={featuresHandler}
                            type="text"
                            name="features"
                            id="name"
                            placeholder="Features"
                            className="w-full mt-2 py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                        />
                        <button
                            className="btn btn-square btn-outline absolute md:top-3 top-2 md:left-full left-60 h-10/12 md:ml-3"
                            type="submit"
                        >
                            <FaPlus />
                        </button>
                    </div>
                </form>
                <form className="w-full" onSubmit={addProjectHandler}>
                    <div className="mb-6">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        ></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="w-full mt-2 py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                            required
                            ref={nameRef}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        ></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="img link"
                            className="w-full mt-2 mx-auto py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                            required
                            ref={imgRef}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        ></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="live site link"
                            className="w-full mt-2 mx-auto py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                            required
                            ref={liveLinkRef}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        ></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="frontend link"
                            className="w-full mt-2 mx-auto py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"

                            ref={clientLinkRef}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        ></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="server link"
                            className="w-full mt-2 mx-auto py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"

                            ref={serverLinkRef}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        ></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="fullstack/frontend/server/design"
                            className="w-full mt-2 mx-auto py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                            required
                            ref={typeRef}
                        />
                    </div>

                    {/* button */}
                    <div className="text-start">
                        <button
                            className="group relative h-10 w-full md:w-40 overflow-hidden rounded-lg bg-white shadow mt-5 px-1 mx-1"
                            type="submit"
                        >
                            <div className="absolute inset-0 w-1 bg-[#07072b] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-primary group-hover:text-white text-lg font-bold">
                                Submit
                            </span>
                        </button>
                    </div>
                </form>
            </div>

            <ProjectsPage />
        </div>
    );
};

export default AdminForm;
