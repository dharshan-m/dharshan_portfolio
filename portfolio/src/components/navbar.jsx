import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <nav className=" text-white p-4 flex justify-between items-center pt-10 pb-10">
            <div className="text-3xl font-bold ">Dharshan P M</div>
            <ul className="flex gap-10">
                <li><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
                <li><button className='outline-solid rounded-sm pt-1 pb-1 pr-2 pl-2 cursor-poniter'>Download Resume</button></li>
            </ul>
        </nav>
    )
}
