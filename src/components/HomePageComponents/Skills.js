import React, { useEffect } from "react";
import SkillCard from "./SkillCard";
import ScrollCarousel from "scroll-carousel";
import { skillsData } from "../../assets/skillsData";
import AliceCarousel from "react-alice-carousel";
import "scroll-carousel/dist/scroll.carousel.min.css";
import './Banner.css'
const Skills = () => {


    useEffect(() => {
        new ScrollCarousel(".my-carousel", { autoplay: true });
    }, []);

    return (
        <div className="md:mt-20 mt-20 w-full">
            <h3 className="text- text-4xl ">
                {"<"} Skills {"/>"}
            </h3>
            <h1 className="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5 text uppercase">
                My skills progress so far
            </h1>

            {
                <div className="w-full my-carousel my-10 md:my-20">
                    {skillsData.map((skillData) => (
                        <SkillCard skillData={skillData} key={skillData.name} />
                    ))}
                </div>
            }
            {/* <div className="md:my-20 my-10">
                <AliceCarousel
                    items={skills}
                    autoPlay={true}
                    autoPlayInterval={200}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    infinite
                    animationDuration={1000}
                    animationType="slide"
                />
            </div> */}
        </div>
    );
};

export default Skills;
