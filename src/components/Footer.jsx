import React from "react";
import { Section } from "lucide-react";
import { Send } from "lucide-react";
import { CircleSmall } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";


export default function Footer() {
  return (
    <div className="mb-5 mt-20">
      <div className="w-10/12 mx-auto flex items-start justify-between">
        <div className="space-y-6">
          <p className="flex items-center text-3xl font-bold cursor-pointer">
            {" "}
            <Section size={30} fontSize={40} className="text-pink-500 cursor-pointer" />
            Syron
          </p>
          <p className=" opacity-70 font-semibold">
            This is a great space to write text{" "}
            <span className="font-bold">
              about your <br />
              company
            </span>{" "}
            and your services. You can use this <br />
            space to go into a little more{" "}
            <span className="font-bold">details</span> about <br /> your
            company.{" "}
          </p>
        </div>

        <div className="space-y-3 ">
          <p className="text-xl font-semibold opacity-80 flex items-center">
            {" "}
            <CircleSmall size={20} color="red" />
            Links
          </p>
          <p className=" opacity-70 font-semibold cursor-pointer hover:text-red-500 duration-500">
            About Us
          </p>
          <p className=" opacity-70 font-semibold cursor-pointer hover:text-red-500 duration-500">
            Our Story
          </p>
          <p className=" opacity-70 font-semibold cursor-pointer hover:text-red-500">
            Projects
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xl font-semibold opacity-80 flex items-center">
            {" "}
            <CircleSmall size={20} color="red" />
            Categories
          </p>
          <div className="flex gap-3  opacity-70 font-semibold">
            <p className="hover:border-b-2 cursor-pointer hover:border-b-purple-500 border-2 border-white duration-500 hover:text-purple-500">
              <span className="text-purple-500 ">#</span>Entertainment{" "}
            </p>
            <p className="hover:border-b-2 cursor-pointer hover:border-b-orange-500 border-2 border-white duration-500 hover:text-orange-500">
              <span className="text-orange-500">#</span> Gadget
            </p>
            <p className="hover:border-b-2 cursor-pointer hover:border-b-blue-500 border-2 border-white duration-500 hover:text-blue-500">
              <span className="text-blue-500">#</span>Ideas
            </p>
          </div>
          <div className="flex gap-3  opacity-70 font-semibold">
            <p className="hover:border-b-2 cursor-pointer hover:border-b-green-500 border-2 border-white duration-500 hover:text-green-500">
              <span className="text-green-500">#</span>Inspiration{" "}
            </p>
            <p className="hover:border-b-2 cursor-pointer hover:border-b-yellow-500 border-2 border-white duration-500 hover:text-yellow-500">
              <span className="text-yellow-500">#</span> Lifestyle
            </p>
            <p className="hover:border-b-2 cursor-pointer hover:border-b-red-500 border-2 border-white duration-500 hover:text-red-500">
              <span className="text-red-500">#</span> Music
            </p>
          </div>
          <div className="flex gap-3  opacity-70 font-semibold">
            <p className="hover:border-b-2 cursor-pointer hover:border-b-violet-500 border-2 border-white duration-500 hover:text-violet-500">
              <span className="text-violet-500">#</span>Travel
            </p>
            <p className="hover:border-b-2 cursor-pointer hover:border-b-pink-500 border-2 border-white duration-500 hover:text-pink-500">
              {" "}
              <span className="text-pink-500">#</span>Trending
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-2xl font-semibold opacity-80 flex items-center">
            {" "}
            <CircleSmall size={20} color="red" />
            Newsletter
          </p>
          <p className="">subscribe newsletter to get latest articles</p>
          <button className="border border-gray-400 flex py-2  px-10 rounded-4xl">
            <input
              type="text"
              placeholder="Email Address*"
              className="outline-none justify-start flex"
            />

            <button className="flex ml-6 items-center gap-1 bg-pink-500 rounded-4xl py-1 px-6 cursor-pointer hover:bg-gray-700 text-white">
              <Send size={16} />
              Join
            </button>
          </button>
        </div>
      </div>

      <div className="mt-20 w-10/12 mx-auto">
        <div className="flex  justify-between items-center  border-t-2 pt-8">
          <p>
            This website may collect data about you, use cookies, embed
            additional third-party tracking, and <br />
            monitor your interaction with that embedded content
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-sm pl-8"><span className="text-yellow-700">Follow</span> <span className="text-violet-700">Us On</span> <span className="text-purple-700">Socials</span></p>
           <p className="flex items-center opacity-80 gap-4 font-bold">
           <Facebook size={30}/>
            <Twitter size={30}/>
            <Instagram size={30}/>
            <Send size={30}/>
           </p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm mt-20">
          <p>Privacy Policy |
          Terms and Conditions</p>
          <p>Copyright & Design By @Rivaxstudio - 2025</p>
        </div>
      </div>
    </div>
  );
}
