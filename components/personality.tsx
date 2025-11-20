"use client"
import React, { useEffect, useState } from "react";

export default function Personality() {
  const [title, setTitle] = useState("Site Title");
  const [storedValue, setStoredValue] = useState("");

  // This useEffect is unnecessary since title is already reactive
  // useEffect(() => {
  //   setTitle(title);
  // }, [title]);

  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };
  const emptyTitle = () => {
    setTitle("")
  }

  return (
    <div
      id="main"
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      <div id="Background-Image-Personality">
        <img
          src="./Web-demo-playground.jpg"
          className=" blur-3xl"
          alt=""
        />
        <div></div>
      </div>
      <div id="context">
        <div
          id="trnasperant-bacground-left-playground"
          className="absolute top-0 left-0 h-full w-[70%] justify-center items-center flex"
        >
          <div
            id="playground-container"
            className=" h-[80%] w-[80%] bg-[#f9f9f9] p-5 "
          >
            <div id="image-context" className="h-[10%] flex justify-between">
              <h1 className="text-xl font-bold flex justify-center items-center text-[92%]">{title}</h1> {/* Title displayed here */}
              <p className="text-sm">about contact</p>
            </div>
            <div id="image-space" className="">
              <img src="./Web-demo-playground.jpg" alt="" className="" />
            </div>
          </div>
        </div>
        <div
          id="right-playground"
          className="absolute top-0 right-0 h-full w-[30%] bg-[#f9f9f9] p-5"
        >
          <div id="right-main-content" className="h-full w-full bg-amber-600">
            <div id="site-title-right-heading">
              Choose a site title and brand personality
            </div>
            <div id="site-title-playground">
              <h1>Site Title</h1>
              <p>Enter your site title</p>
              <input 
                type="text"  
                value={title} // Controlled input
                onChange={handleTitleChange} // Proper update handler
                onClick={emptyTitle}
                className="border p-2 w-full"
                placeholder="Enter site title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}