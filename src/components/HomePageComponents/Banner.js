import React from "react";
import img from '../../assets/MD Shakil Hossain-5-fotor-bg-remover-20230606141248.png'
import './Banner.css'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center gap-10 items-center my-24">
                <div className="md:w-1/2 w-full text-center md:text-start">
                    <h1 className="text-6xl text-white font-bold text">
                        Md Shakil  <span className="text-secondary">Hossain</span>{" "}
                    </h1>
                    {/* <p className="text-3xl font-bold mt-5"><span className="text-secondary text-4xl
                    ">MERN</span> Stack Junior Web Developer</p> */}
                    <p className='font=Oswald flex gap-2 text-2xl mt-5 font-bold lg:text-4xl '>I can do <Typewriter
                        options={{
                            strings: ['Frontend', 'MernStack', 'Backend', 'Fullstack'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 2,
                            delay: 50
                        }}
                    /></p>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg font-bold shadow mt-5 px-1 lg:mt-12">
                        <a
                            href="https://drive.google.com/file/d/1vAjo_uC6lw8T4ZgJe7B37y3pefvDNc00/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="absolute inset-0 w-1 bg-[#07072b] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-primary group-hover:text-white">
                                See Resume!
                            </span>
                        </a>
                    </button>
                </div>
                {/* // src="https://i.ibb.co/pR1WFzL/boy.png" */}
                <div className="md:w-96 md:h-96 w-full relative h-full rounded ">
                    <img
                        src={img}
                        alt="md-shakil-hossain"
                        className="rounded-md  w-full h-full box"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
