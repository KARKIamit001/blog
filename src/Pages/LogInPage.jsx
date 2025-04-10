import React from "react";
import page from "../../public/login.jpg";
import { LayoutDashboard, Square } from "lucide-react";

export default function LogInPage() {
  return (
    <div className="flex items-center justify-center h-80vh">
      {/* <div className="relative">
        <img src={page} alt="" className="w-full object-cover relative" />

        <div className="absolute top-25  bg-white  h-fit sm:top- "></div>
      </div> */}

      <div className="w-3/12 border ml-12">
        <form className=" space-y-6 p-8">
          <div>
            <p className="text-3xl font-bold flex justify-center  ">Login</p>
            <p className="font-semibold opacity-70 ">
              Doesn't have an account yet?
              <span className="text-purple-500 opacity-100 cursor-pointer border-b">
                Sign Up
              </span>
            </p>
          </div>
          <div>
            <p className="font-bold opacity-80">Email Address</p>

            <input
              type="email"
              placeholder="Your @example.com"
              className="border border-gray-300 pr-20 px-2"
            />
          </div>
          <div>
            <p className="font-bold flex justify-between opacity-80">
              Password{" "}
              <span className="text-purple-500 border-b cursor-pointer">
                Forget Password?
              </span>
            </p>
            <input
              type="text"
              placeholder="Enter 6 character or more"
              className="border border-gray-300 pr-20 mt-1 px-2"
            />
          </div>
          <div className="flex items-center gap-2 ">
            <Square /> Remember me
          </div>

          <button className="bg-purple-500 text-center flex px-28 text-white font-bold py-2 rounded-4xl cursor-pointer">
            LOGIN
          </button>

          <p className="flex justify-center ">or login with</p>

          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center border gap-4 py-2 px-4 rounded-xl font-bold cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height="20"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#fff"
                  d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                />
                <path
                  fill="#e33629"
                  d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                />
                <path
                  fill="#f8bd00"
                  d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                />
                <path
                  fill="#587dbd"
                  d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                />
                <path
                  fill="#319f43"
                  d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                />
              </svg>
              Google
            </button>

            <button className="flex items-center border gap-4 py-2 px-4 rounded-xl font-bold cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height="20"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#1877f2"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                />
                <path
                  fill="#fff"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                />
              </svg>
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
