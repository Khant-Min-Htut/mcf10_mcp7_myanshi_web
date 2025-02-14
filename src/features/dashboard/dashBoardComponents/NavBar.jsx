import { keyframes } from 'framer-motion'
import { path } from 'framer-motion/client';
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
return (
    <div className="w-[280px] h-[1024px] bg-[#0A0A0A] flex flex-col justify-between pt-6 -translate-x-[100%] ">
      {/* Top Section */}
      <div>
        {/* Brand/Logo */}
        <h1 className="text-white text-center text-2xl font-bold mb-8">
          MYANSHI
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-col">
          {navData.map(({ id, icon, name ,path}) => (
            <NavLink
              key={id}
              to={path}
              className="flex items-center w-[280px] h-[72px] px-4 gap-[10px] text-white hover:bg-[#1A1A1A]"
            >
              {/* Replace '//' with actual icon source or import your icons */}
              <span>{icon}</span>
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col">
        {/* Logout Button */}
        <button
          className="w-[280px] h-[72px] bg-[#CE3319] text-white text-lg font-semibold flex items-center justify-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar

const navData=[
    {
        id:1,
        icon:"//",
        name:"Dashboard",
        path:"/dashboard"
    },
    {
        id:2,
        icon:"//",
        name:"Category",
        path:"/dashboard/category"
    },
    {
        id:3,
        icon:"//",
        name:"Promotions",
        path:"/promotions"
    },
    {
        id:4,
        icon:"//",
        name:"Blog",
        path:"/dashboard/blog"
    },
    {
        id:5,
        icon:"//",
        name:"Author",
        path:"/"
    },
    {
        id:6,
        icon:"//",
        name:"Gallery",
        path:"/"
    },
    {
        id:7,
        icon:"//",
        name:"FAQ"
        ,path:"/"
    },
    {
        id:8,
        icon:"//",
        name:"Review",
        path:"/"
    },
    {
        id:9,
        icon:"//",
        name:"Location",
        path:"/"
    },
    {
        id:10,
        icon:"//",
        name:"Profile",
        path:"/"
    }
]