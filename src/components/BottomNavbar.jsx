import React from "react";
import { Send } from "lucide-react";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function BottomNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}


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
           
            
          </div>

         
        </div>
      </div>

      <div className="block md:hidden   ">
            <button onClick={toggleDrawer}><Menu /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            > 
                <div className="flex flex-col p-4 justify-center text-xl font-bold opacity-70">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
            </Drawer>
        </div>
    </div>
  );
}
