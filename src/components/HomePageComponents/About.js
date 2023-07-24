import React from "react";
import { FaMedal } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import ImageAbout from '../../assets/pexels-amirali-beigi-792326.jpg'


function About() {
    return (
        <div className="mt-20" >
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h3 className="text- text-4xl ">
                    {"<"} Who Am I {"/>"}
                </h3>
                <h1 className="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5 text">
                    A Passionate Developer Who Loves to Code
                </h1>
            </div>
            <div className="flex md:flex-row flex-col mt-10 justify-center items-center md:mt-20 gap-20" >
                <div className="md:w-1/2 " data-aos="fade-left">
                    <img
                        src={ImageAbout}
                        className="rounded-bl-full rounded-tr-full box md:w-2/3"
                        alt=""
                    />
                </div>
                <div className="md:w-1/2 md:text-start" data-aos="fade-right">
                    <h1 className="text-5xl w-full mx-auto text-white mb-5">About Me</h1>

                    <div>
                        <p className="text-xl leading-relaxed">
                            Hello! My name is Md Shakil Hossain, From Barishal, Bangladesh. I am a <span className='font=Oswald flex gap-2 text-2xl mt-5 font-bold lg:text-2xl text'> <Typewriter
                                options={{
                                    strings: ['Frontend Developer', 'MernStack Developer', 'Backend Developer', 'Fullstack Developer'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 2,
                                    delay: 50
                                }}
                            /></span> specializing in building React.js WebApp. I enjoy
                            creating things that live on the internet. My interest in web
                            development started back in 2021, I use Javascript, React.js, Next.js,
                            Express, Node, Mongodb, Firebase and much more technology to create
                            high-end interactive experiences and products. Recently working on some
                            great and best projects.
                        </p>
                    </div>

                    <div className="flex flex-col w-full h-full lg:flex-row mt-10 border border-[#07072b] rounded-3xl py-10 md:p-0 card-about">
                        <div className="grid flex-grow  bg-none rounded-box place-items-center pb-5">
                            <div className="mx-auto">
                                <div>
                                    <h3 className="text-xl font-bold">Name</h3>
                                    <h5 className="font-thin">Md Shakil Hossain</h5>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Email</h3>
                                    <h5 className="font-thin">mdshakil6565a@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal divide-white text-9xl"><FaMedal /></div>
                        <div className="grid flex-grow h-32  bg-none rounded-box place-items-center pt-5">
                            <div className="mx-auto">
                                <div>
                                    <h3 className="text-xl font-bold">Phone</h3>
                                    <h5 className="font-thin">+8801728178063<br /> (WhatsApp)</h5>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Address</h3>
                                    <h5 className="font-thin">Barishal, Bangladesh</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
