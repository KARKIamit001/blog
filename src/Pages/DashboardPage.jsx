import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <div className="w-8/12 mx-auto border border-gray-300 p-8 mt-24 space-y-4">
        <p className="text-3xl font-semibold text-center">Write New Article</p>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <textarea
            type="text"
            name="title"
            id="title"
            placeholder="Enter News Title"
            className="border-gray-300 border  px-2
            py-1
            outline-none "
           
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="banner">Banner</label>
          <input type="file" className="border border-gray-300 outline-none" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="title">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Enter News Description"
            className="border border-gray-300 px-2 py-1  outline-none h-80"
          />
        </div>

        <button className="bg-blue-500 px-8 py-1.5 text-white hover:bg-pink-500 duration-500">
          Create Article
        </button>
      </div>
    </div>
  );
}
