import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import github from '../assets/github.png'

const Navbar = () => {
    return (
        <nav className="navbar md:px-10  bg- shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        <li className=' '> <NavLink className={({ isActive }) => isActive ? 'active-link !text-xl' : 'text-xl'} to='/'>Home</NavLink></li>
                        <li className=''> <NavLink className={({ isActive }) => isActive ? 'active-link !text-xl' : 'text-xl'} to='/apps'>Apps</NavLink></li>
                        <li className=''> <NavLink className={({ isActive }) => isActive ? 'active-link !text-xl' : 'text-xl'} to='/installation'>Installation</NavLink></li>

                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img src={logo} className='h-[40px]' alt="" />
                    <Link to='/' className=' font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent'>HERO.IO</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-3  menu-horizontal px-1">
                    <li className=' '> <NavLink className={({ isActive }) => isActive ? 'active-link' : 'text-2xl'} to='/'>Home</NavLink></li>
                    <li className=''> <NavLink className={({ isActive }) => isActive ? 'active-link' : 'text-2xl'} to='/apps'>Apps</NavLink></li>
                    <li className=''> <NavLink className={({ isActive }) => isActive ? 'active-link' : 'text-2xl'} to='/installation'>Installation</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/Azizul-haque1' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  flex"> <img src={github} alt="" /> Contribute</a>
            </div>
        </nav>

    );
};

export default Navbar;