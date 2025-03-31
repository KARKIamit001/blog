import React from "react";
import { Send } from "lucide-react";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";

export default function BottomNavbar() {
  return (
    <div className=" bg-white shadow-xl h-16 flex items-center">
      <div className="w-11/12 md:w-8/12 mx-auto flex items-center justify-between">
        <div>Logo</div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-8 text-gray-700">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/join-us">
              <button className="flex items-center bg-pink-500 px-6 py-2 rounded-md text-white gap-2 hover:bg-black duration-500 cursor-pointer">
                {" "}
                <Send size={16} />
                Join Us
              </button>
            </NavLink>
            <Search />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
