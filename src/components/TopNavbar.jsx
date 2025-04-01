import React from "react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Send } from "lucide-react";
import { Blinds } from "lucide-react";
import { NavLink } from "react-router";

export default function TopNavbar() {
  return (
   <div className="bg-gradient-to-r from-purple-700 via-blue-300 to-pink-500">
     <div className="s:11/12 md:w-8/12 mx-auto  flex justify-between py-2 text-white">
      <div className="">
      <div className="flex gap-4 hidden md:block">
        <p>
          <Blinds />
        </p>
        <p>
          <Instagram />
        </p>
        <p>
          {" "}
          <Twitter />
        </p>
        <p>
          {" "}
          <Send />
        </p>

      </div>
      </div>

      <div className="flex items-center gap-4 ">
        <NavLink to="/about">About</NavLink>
        <p>-</p>
        <NavLink to="/login">Login</NavLink>
        <p>-</p>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
   </div>
  );
}
