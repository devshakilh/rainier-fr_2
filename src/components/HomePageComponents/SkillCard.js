import React from "react";

const SkillCard = ({ skillData }) => {
    // console.log(skillData)
    const { name, img } = skillData || {};
    return (
        <div className="w-full">
            <div className="card w-64 mx-auto md:mx-auto md:w-52 bg-[#3A2B71] shadow-xl flex flex-col justify-center items-center py-10">
                <div className="w-20 rounded-full bg-gray-100 p-3">
                    <img src={img} alt="" className="w-20 mx-auto" />
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-bold text-white border-white px-3 rounded-3xl">
                        {name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
