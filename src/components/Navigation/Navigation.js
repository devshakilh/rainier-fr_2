import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";

const Navigation = () => {
    const activeStyle = {
        color: "#00C0FF",
    };

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
                                        <NavLink
                                            to={link}
                                            style={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }
                                        >
                                            <span className="text-2xl font-bold">{name}</span>
                                        </NavLink>
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
                    <Link to="/" className="cursor-pointer text-xl flex items-end">
                        <img src="https://i.ibb.co/jHbyW2c/p.png" alt="" className="w-16" />
                        <span className="text-5xl font-bold">ort</span>
                        <span className="text-5xl font-bold text-secondary">folio</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navItems.map((navItem) => {
                            const { link, name } = navItem;
                            return (
                                <li className="hover:text-secondary">
                                    <NavLink
                                        to={link}
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        {name}
                                    </NavLink>
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
