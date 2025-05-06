import React, { useEffect, useState } from "react";
import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import FeedSection from "./components/FeedSection";
import Marquee from "./components/Marquee";
import axios from "axios"
import { CloudHail } from "lucide-react";

export default function App() {
  //Hooks (useState, useEffect)

  // 1. useState
  // syntax
  // const [variable, setterFunction] = useState(initialValue)

  const [balance, setBalance] = useState(100);
  const [myName, setMyName] = useState("lokey");
  const [married, setMarried] = useState(false);

  // console.log(balance, "this is balance");
  // console.log(myName);
  // console.log(married);

  //2 useEffect (reload hudaa chalx)
  // syntax: useEffect(()=>{},[dependency array --- first page reload hudaa chalx seconde the changes in varible and it run])

  useEffect(() => {
    setBalance(balance + 400);
  }, []);



// get all blogs

const [blogs, setBlogs] = useState([])



const getAllFunction = async ()=>{
  try {
    
    const response = await axios.get("https://blog-fullstack-1.onrender.com/get-all-blogs")
    console.log(response.data.data , "this is response test")
     setBlogs(response.data.data )
  } catch (error) {
    console.log("something went wrong", error)
  }
}

console.log(blogs)

useEffect(()=>{getAllFunction()},[])






  return (
    <div>
      <p>My balance is {balance}</p>
      <p>My name is {myName}</p>
      {married && <p>I am married</p>}
      {!married && <p>I am unmarried</p>}

      <button
        onClick={() => setBalance(balance + 20)}
        className="bg-blue-500 px-4 py-2 text-white"
      >
        Change Balance
      </button>

      <button
        onClick={() => setMyName("lokey sirr")}
        className="bg-blue-500 px-4 py-2 text-white ml-4"
      >
        Change Name
      </button>

      <button
        onClick={() => setMarried(!married)}
        className="bg-blue-500 px-4 py-2 text-white ml-4"
      >
        Change Marriage Status
      </button>

      <FeedSection blogs={blogs}/>
      {/* <Marquee/> */}
    </div>
  );
}
