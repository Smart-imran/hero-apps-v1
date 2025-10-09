import React from "react";
import logo from "/logo.png";
import Container from "../Pages/Container";
import { MdInstallDesktop } from "react-icons/md";
import { FaAppStore } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { LuHouse } from "react-icons/lu";
import { NavLink } from "react-router";




const NavBar = () => {
  return (
    <div className="bg-white shadow-sm">
      <Container>
        <div className="navbar">
          {/* Left */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                ☰
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/"><LuHouse className="text-xl"/>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products"> <FaAppStore className="text-xl" />Apps</NavLink>
                </li>
                <li>
                  <NavLink to="/installed"> <MdInstallDesktop className="text-xl"/>Installation</NavLink>
                </li>
              </ul>
            </div>
            <a className="cursor-pointer">
              <img className="w-12 h-12" src={logo} alt="Logo" />
            </a>
            <NavLink to="/">
            <span className="uppercase font-bold text-xl ml-2 text-[#632EE3] cursor-pointer">
              Hero.Io
            </span>
            </NavLink>
          </div>

          {/* Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/"><LuHouse className="text-xl"/>Home</NavLink>
              </li>
              <li>
                <NavLink to="/products"> <FaAppStore className="text-xl" />Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installed"> <MdInstallDesktop className="text-xl"/>Installation</NavLink>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end">
            <a className="btn"> <FaGithub />Contribute</a>

            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
