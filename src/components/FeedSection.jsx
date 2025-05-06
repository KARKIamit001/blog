import React from "react";
import photo from "../../public/ball.webp";
import image from "../../public/car.webp";
import tasbir from "../../public/skateboard.webp";
import tauko from "../../public/helmet.webp";
import topi from "../../public/hat.webp";
import fool from "../../public/download.jpg";
import chiya from "../../public/coffee.jpg";
import geet from "../../public/guitar.jpg";
import { NavLink } from "react-router";

export default function FeedSection({blogs}) {
  console.log(blogs) 

//props vNEKO PROPERTY = parent ko properties child maa pass gardaa props use hunx

  return (
    <div className="mb-20">

    {
      blogs.map((item,index)=>(


        <div key={index} className="w-11/12 md:w-8/12 mx-auto mt-12 ">
        {/* card */}
        <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 group">
          <div className="md:flex gap-8 space-y-4">
            <img
              src={photo}
              className="h-32 w-full object-cover md:w-40 rounded-2xl cursor-pointer group-hover:scale-120 duration-500"
              alt="This is ball image"
            />
            <div>
              <NavLink to = {`/blog-read/${item._id}`} className="text-2xl font-medium mb-3 flex flex-col group-hover:text-pink-500 cursor-pointer border-b-3 duration-500 border-white group-hover:border-pink-500">
                {item.title}
              </NavLink>
              <span className="text-gray-600">By Jessica Smith 6 Comments</span>
              <p className="text-lg text-gray-700 mt-5">
               {item.description}
              </p>
            </div>
          </div>

          <div className="md:flex items-center justify-between border-t border-dashed mt-4 pb-4 border-gray-300 pt-4">
            <div className="flex items-center gap-2">
              <p className="cursor-pointer hover:text-yellow-500 hover:border-b duration-500">
                <span className="text-yellow-500  ">#</span>
                Lifestyle{" "}
              </p>

              <p className="cursor-pointer hover:text-pink-500 hover:border-b duration-500">
                {" "}
                <span className="text-pink-500">#</span>Trending
              </p>
            </div>

            <div className="space-x-2">
              <span>🔥299 Views </span>
              <span>⌚{item.timeToRead} Min Read</span>
            </div>
          </div>
        </div>
      </div>  


      ))
    }

    

      {/* <div className="w-11/12 md:w-8/12 mx-auto border border-gray-100 mt-10 shadow-xl group ">
        <div className="md:flex items-center gap-6 px-4 py-2">
          <img src={image} className="h-35 rounded-2xl cursor-pointer group-hover:scale-120  w-full object-cover md:w-40" alt="" />
          <div>
            <p className="text-2xl font-medium group-hover:text-pink-500 cursor-pointer border-b-3 border-white group-hover:border-pink-500 duration-500">
              Healthy Cooking Made Easy With Nutritious Recipes
            </p>
            <p className="text-gray-700 mt-4">By Jessica Smith No Comment</p>
            <p className="text-xl text-gray-700 mt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t border-dashed border-gray-300 mt-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-purple-500 hover:border-b duration-500">
              <span className="text-purple-500">#</span>Entertainment{" "}
            </p>

            <p className="cursor-pointer hover:text-blue-500 hover:border-b duration-500">
              <span className="text-blue-500">#</span>Travel
            </p>
          </div>
          <p>
            <span>🔥405 Views </span> <span>⌚5 Min Read</span>
          </p>
        </div>
      </div> */}

      {/* <div className="w-11/12 md:w-8/12 mx-auto border border-gray-100 mt-10 shadow-xl group">
        <div className="md:flex items-center gap-6 px-4 py-2">
          <img
            src={tasbir}
            className="h-35 rounded-2xl cursor-pointer group-hover:scale-120  w-full object-cover md:w-40 "
            alt=""
          />
          <div>
            <p className="text-2xl font-medium group-hover:text-red-500 cursor-pointer group-hover:border-pink-500 border-b-3 border-white duration-500">
              Shaping Tomorrow’s Landscape Of Intelligent Machines
            </p>
            <p className="text-gray-700 mt-4">By Jessica Smith No Comment</p>
            <p className="text-xl text-gray-700 mt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t border-dashed border-gray-300 mt-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-green-500 hover:border-b duration-500">
              <span className="text-green-500">#</span>Inspiration{" "}
            </p>

            <p className="cursor-pointer hover:text-red-500 hover:border-b duration-500">
              <span className="text-red-500">#</span>Music
            </p>
          </div>
          <p>
            <span>🔥523 Views </span> <span>⌚7 Min Read</span>
          </p>
        </div>
      </div> */}

      {/* <div className="w-11/12 md:w-8/12 mx-auto border border-gray-100 mt-10 shadow-xl group ">
        <div className="md:flex items-center gap-6 px-4 py-2">
          <img src={tauko} className="h-35 rounded-2xl cursor-pointer group-hover:scale-120  w-full object-cover md:w-40" alt="" />
          <div>
            <p className="text-2xl font-medium group-hover:text-red-500 cursor-pointer  group-hover:border-pink-500 border-b-3 border-white duration-500">
              Hidden Ways To Save Money That You Might Be Missing
            </p>
            <p className="text-gray-700 mt-4">By Jessica Smith No Comment</p>
            <p className="text-xl text-gray-700 mt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t border-dashed border-gray-300 mt-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-orange-500 hover:border-b duration-500">
              <span className="text-orange-500">#</span>Gadget{" "}
            </p>

            <p className="cursor-pointer hover:text-red-500 hover:border-b duration-500">
              <span className="text-red-500">#</span>Trending
            </p>
          </div>
          <p>
            <span>🔥299 Views </span> <span>⌚2 Min Read</span>
          </p>
        </div>
      </div> */}

      {/* <div className="w-11/12 md:w-8/12 mx-auto border border-gray-100 mt-10 shadow-xl group">
        <div className="md:flex items-center gap-6 px-4 py-2">
          <img src={topi} className="h-35 rounded-2xl cursor-pointer group-hover:scale-120  w-full object-cover md:w-40" alt="" />
          <div>
            <p className="text-2xl font-medium group-hover:text-red-500 cursor-pointer  group-hover:border-pink-500 border-b-3 border-white duration-500">
              Time Management Secrets Of An Efficient Engineer
            </p>
            <p className="text-gray-700 mt-4">By Jessica Smith No Comment</p>
            <p className="text-xl text-gray-700 mt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t border-dashed border-gray-300 mt-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-blue-500 hover:border-b duration-500">
              <span className="text-blue-500">#</span>Travel{" "}
            </p>
          </div>
          <p>
            <span>🔥208 Views </span> <span>⌚6 Min Read</span>
          </p>
        </div>
      </div> */}

      {/* <div className="w-11/12 md:w-8/12 mx-auto border border-gray-100 mt-10 shadow-xl group">
        <div className="md:flex items-center gap-6 px-4 py-2">
          <img src={fool} className="h-35 rounded-2xl cursor-pointer group-hover:scale-120  w-full object-cover md:w-40" alt="" />
          <div>
            <p className="text-2xl font-medium group-hover:text-red-500 cursor-pointer  group-hover:border-pink-500 border-b-3 border-white duration-500">
              Musical Improvisation Is The Spontaneous Music
            </p>
            <p className="text-gray-700 mt-4">By Jessica Smith No Comment</p>
            <p className="text-xl text-gray-700 mt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t border-dashed border-gray-300 mt-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-green-500 hover:border-b duration-500">
              <span className="text-green-500">#</span>Inspiration{" "}
            </p>

            <p className="cursor-pointer hover:text-red-500 hover:border-b duration-500">
              <span className="text-red-500">#</span>Music
            </p>
          </div>
          <p>
            <span>🔥237 Views </span> <span>⌚4 Min Read</span>
          </p>
        </div>
      </div> */}

      {/* <div className="w-11/12 md:w-8/12 mx-auto border border-gray-100 mt-10 shadow-xl group">
        <div className="md:flex items-center gap-6 px-4 py-2">
          <img src={chiya} className="h-35 rounded-2xl cursor-pointer group-hover:scale-120  w-full object-cover md:w-40" alt="" />
          <div>
            <p className="text-2xl font-medium group-hover:text-red-500 cursor-pointer  group-hover:border-pink-500 border-b-3 border-white duration-500">
              Unprecedented Growth Of Next-gen Intelligent Solutions
            </p>
            <p className="text-gray-700 mt-4">By Jessica Smith No Comment</p>
            <p className="text-xl text-gray-700 mt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t border-dashed border-gray-300 mt-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-purple-500 hover:border-b duration-500">
              <span className="text-purple-500">#</span>Entertaiment{" "}
            </p>

            <p className="cursor-pointer hover:text-yellow-500 hover:border-b duration-500">
              <span className="text-yellow-500">#</span>Gadget
            </p>
          </div>
          <p>
            <span>🔥457 Views </span> <span>⌚9 Min Read</span>
          </p>
        </div>
      </div> */}

      {/* <div className="w-11/12 md:w-8/12 mx-auto border border-gray-100 mt-10 shadow-xl group">
        <div className="md:flex items-center gap-6 px-4 py-2">
          <img src={geet} className="h-40 rounded-2xl cursor-pointer group-hover:scale-120  w-full object-cover md:w-40" alt="" />
          <div>
            <p className="text-2xl font-medium group-hover:text-red-500 cursor-pointer  group-hover:border-pink-500 border-b-3 border-white duration-500">
              Computer Filters Noise To Make You A Better Listener
            </p>
            <p className="text-gray-700 mt-4">By Jessica Smith No Comment</p>
            <p className="text-xl text-gray-700 mt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t border-dashed border-gray-300 mt-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer hover:text-yellow-500 hover:border-b duration-500">
              <span className="text-yellow-500">#</span>Lifestyle{" "}
            </p>

            <p className="cursor-pointer hover:text-pink-500 hover:border-b duration-500">
              <span className="text-pink-500">#</span>Trending
            </p>
          </div>
          <p>
            <span>🔥99 Views </span> <span>⌚1 Min Read</span>
          </p>
        </div>
      </div> */}
    </div>
  );
}
