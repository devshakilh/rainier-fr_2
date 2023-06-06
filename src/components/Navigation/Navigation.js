import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import '../HomePageComponents/Banner.css'
import { useState } from "react";

const Navigation = () => {
    const [active, setActive] = useState("Home");
    const navItems = [
        {
            link: "/",
            name: "Home",
        },
        {
            link: "/about",
            name: "About",
        },
        {
            link: "/skills",
            name: "Skills",
        },
        {
            link: "/services",
            name: "Services",
        },
        {
            link: "/projects",
            name: "Projects",
        },
        {
            link: "/contact",
            name: "Contact",
        },
        // {
        //     link: "/blogs",
        //     name: "Blogs",
        // },
        // {
        //     link: "/contact",
        //     name: "Contact",
        // },
    ];
    return (
        <>

            <div className="navbar bg-none md:px-32 py-6 items-end">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#07072b] border border-secondary rounded-box w-52 py-10"
                        >
                            {navItems.map((navItem, index) => {
                                const { link, name } = navItem;
                                return (
                                    <li className="hover:text-secondary mx-auto" key={index}>
                                        <Link
                                            to={link}
                                            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === name ? "text-white" : "text-dimWhite"
                                                } ${index === navItem.length - 1 ? "mr-0" : "mr-10"}`}
                                            onClick={() => setActive(name)}
                                        >
                                            <span className="text-2xl font-bold">{name}</span>
                                        </Link>
                                    </li>
                                );
                            })}

                            <span className="my-5 text-secondary mx-auto font-bold text-3xl">
                                <SiDatabricks />
                            </span>

                            <div className="flex justify-center items-center">
                                <li className="rounded-full hover:text-secondary ">
                                    <a
                                        className="rounded-full font-bold text-3xl"
                                        href="https://github.com/shakilla1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub />
                                    </a>
                                </li>
                                <li className="rounded-full hover:text-secondary">
                                    <a
                                        className="rounded-full font-bold text-3xl"
                                        href="https://www.linkedin.com/in/md-shakil-hossain-s/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="rounded-full hover:text-secondary">
                                    <a
                                        className="rounded-full font-bold text-3xl"
                                        href="https://github.com/shakilla1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaFacebookF />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <Link to="/" className="cursor-pointer text text-xl flex items-end">
                        <img src="https://i.ibb.co/jHbyW2c/p.png" alt="" className="w-16" />
                        <span className="text-5xl font-bold">ort</span>
                        <span className="text-5xl font-bold text-secondary">folio</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navItems.map((navItem, index) => {
                            const { link, name } = navItem;
                            return (
                                <li className="hover:text-secondary">
                                    <Link
                                        to={link}
                                        className={`  ${active === name ? "border-b-4 nav" : "text-dimWhite"
                                            } ${index === navItem.length - 1 ? "" : ""}`}
                                        onClick={() => setActive(name)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}

                        <span className="mx-5 text-secondary">||</span>

                        <li className="rounded-full hover:text-secondary">
                            <a
                                className="rounded-full"
                                href="https://github.com/shakilla1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li className="rounded-full hover:text-secondary">
                            <a
                                className="rounded-full"
                                href="https://www.linkedin.com/in/md-shakil-hossain-s/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="rounded-full hover:text-secondary">
                            <a
                                className="rounded-full"
                                href="https://github.com/shakilla1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookF />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navigation;
