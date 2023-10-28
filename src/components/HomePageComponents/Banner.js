import React, { useEffect } from "react";
import img from '../../assets/Md Shakil  Hossain-.png'
import './Banner.css'
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css'
import AOS from 'aos'



const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div>

            <div className="flex flex-col-reverse md:flex-row md:justify-between  justify-center gap-10 items-center my-24" >
                <div className="md:w-1/2 w-full text-center md:text-start" data-aos="fade-down" >
                    <h1 className="text-6xl text-white font-bold text">
                        Md Shakil  <span className="text-secondary">Hossain</span>{" "}
                    </h1>

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
                            href="https://drive.google.com/file/d/1yTNs3Lxgt5JuEkUmsuw8asc7ZrD7mw4G/view?usp=sharing"
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

                <div className=" md:w-96 md:h-96 w-full h-full relative  rounded " data-aos="fade-right">
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
