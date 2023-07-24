import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import './Banner.css'
const Contact = () => {
    const formRef = useRef();

    const contactHandler = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_uzb1nng", "template_rs1ytyt", formRef.current, "I3UgVj9Qwk2VmI4T8")
            .then(
                (result) => {
                    // console.log(result)
                    if (result.status === 200) {
                        toast.success("Sent message successfully! :)");
                        e.target.reset();
                    }
                },
                (error) => {
                    // console.log(error)
                    toast.error(error);
                }
            );
    };

    return (
        <div className="md:mt-20 mt-20 w-full" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h3 className="text- text-4xl ">
                {"<"} Contact {"/>"}
            </h3>
            <h1 className="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5 text uppercase" >
                I Want to Hear from You
            </h1>
            <div className="relative flex items-start justify-center sm:items-center mt-10" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <div className="max-w-6xl mx-auto">
                    <div className=" overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="md:p-6 mr-2 sm:rounded-lg" data-aos="fade-right"
                            >
                                <img
                                    src="https://i.ibb.co/rZbkhYQ/contact-removebg-preview.png"
                                    alt=""
                                />
                            </div>

                            <form
                                className="md:p-6 flex flex-col justify-center"
                                onSubmit={contactHandler}
                                ref={formRef} data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="flex flex-col">
                                    <label htmlhtmlFor="name" className="hidden">
                                        Full Name
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-100 mt-2 input py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlhtmlFor="name" className="hidden">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="name"
                                        placeholder="Email"
                                        className="w-100 mt-2 input py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlhtmlFor="name" className="hidden">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone Number"
                                        className="w-100 mt-2 input py-3 px-3 rounded-lg bg-[#07072b] border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlhtmlFor="name" className="hidden">
                                        Message
                                    </label>
                                    <textarea
                                        type="text"
                                        name="message"
                                        id="phone"
                                        placeholder="Enter your messages"
                                        className="w-100  mt-2 py-3 px-3 bg-[#07072b] rounded-lg border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400"
                                        rows={"7"}
                                        required
                                    />
                                </div>

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
