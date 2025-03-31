import React from "react";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-2 mt-20 w-10/12 mx-auto">
      <div className="space-y-8">
        <button className="border border-gray-300 rounded-2xl px-1 py-1 opacity-80 gap-x-10 flex "><button className="border-gray-500 border rounded-4xl px-2 bg-gradient-to-r from-purple-700 via-blue to-pink-600 text-white">Success</button>
        Our success in numbers</button>
        <p className="text-4xl font-semibold opacity-80">
        Have a project in mind? <br />
        Let's talk!
        </p>

        <p className="opacity-70">
        Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut elit tellus, luctus nec ullamcorper mattis,<br />pulvinar dapibus leo.
        </p>
      </div>
      <div className="space-y-8"> 
        <div className="grid grid-cols-2 space-x-5">
          <input type="text" placeholder="First Name" className="border border-gray-300 py-4 px-4 rounded-2xl outline-0"/>
          <input type="text" placeholder="Last Name" className="border border-gray-300 py-4 px-4 rounded-2xl outline-0"/>
        </div>

        <div className="border rounded-xl border-gray-300">
          <input type="text" placeholder="Email" className="outline-0 py-3 px-4 w-full "/>
        </div>

          <textarea type="text" placeholder="Your Message" className="h-60 w-full p-4 outline-0 border border-gray-300"/>

         <button className="bg-pink-500 text-white cursor-pointer hover:bg-gray-600 px-4 py-3 rounded-xl duration-500">Submit Form</button>
        


     
        
      </div>
    </div>
     
  );
}
