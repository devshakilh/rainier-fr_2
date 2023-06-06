import React from "react";

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center gap-10 items-center my-24">
                <div className="md:w-1/2 w-full text-center md:text-start">
                    <h1 className="text-7xl text-white font-bold">
                        Md Shakil <span className="text-secondary">Hossain</span>{" "}
                    </h1>
                    <p className="text-3xl font-bold mt-5"><span className="text-secondary text-4xl
                    ">MERN</span> Stack Junior Web Developer</p>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg font-bold shadow mt-5 px-1">
                        <a
                            href="https://drive.google.com/file/d/1vAjo_uC6lw8T4ZgJe7B37y3pefvDNc00/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-primary group-hover:text-white">
                                See Resume!
                            </span>
                        </a>
                    </button>
                </div>

                <div className="md:w-96 md:h-96 w-full relative h-full rounded ">
                    <img
                        src="https://i.ibb.co/pR1WFzL/boy.png"
                        alt="md-shakil-hossain"
                        className="rounded-full w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
