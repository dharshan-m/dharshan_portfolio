import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pr-15 pl-15 pt-5 pb-5">
            <div className="text-3xl font-bold">Dharshan.Dev</div>
            <ul className="flex gap-10">
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="text-red-500"
                        className="cursor-pointer text-black"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="text-red-500"
                        className="cursor-pointer text-black"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="text-red-500"
                        className="cursor-pointer text-black"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="text-red-500"
                        className="cursor-pointer text-black"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="text-red-500"
                        className="cursor-pointer text-black"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div>
                <button className="outline-solid text-[#5E3BEE] rounded-sm pt-1 pb-1 pr-2 pl-2 cursor-pointer">
                    Download Resume
                </button>
            </div>
        </nav>
    )
}
