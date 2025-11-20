// "use client";
// import { redirect } from "next/navigation";
// import React, { useState, useEffect, useRef } from "react";
// import Goals from "@/components/goals";
// import Personality from "@/components/personality";

// export default function UserPref() {

//   const [idx, setIdx] = useState(0);

//   const [frameHeight, setFrameHeight] = useState(['75vh', '35vh', ]);
//   const [frameLeft, setFrameLeft] = useState([]);
//   const [frameTop, setFrameTop] = useState([]);
//   const [frameZ, setFrameZ] = useState([]);
//   const [frameShadow, setFrameShadow] = useState([]);





//   const [primeStyle, setPrimeStyle] = useState({
//     height: "75vh",
//     left: "2%",
//     top: "10%",
//     zIndex: `3`,
//     boxShadow: `0 0 0 rgba(0,0,0,0.3)`,
//   });
//   const [secStyle, setSecStyle] = useState({
//     height: "35vh",
//     left: "calc(100% - 31vw)",
//     top: "10vh",
//     zIndex: `2`,
//     boxShadow: `0 5px 5px rgba(0,0,0,0.3)`,
//   });
//   const [thirdStyle, setThirdStyle] = useState({
//     height: "35vh",
//     left: "calc(100% - 31vw)",
//     top: "30vh",
//     zIndex: `1`,
//     boxShadow: `0 5px 5px rgba(0,0,0,0.3)`,
//   });
//   const [fourthStyle, setFourthStyle] = useState({
//     height: "35vh",
//     left: "calc(100% - 31vw)",
//     top: "50vh",
//     zIndex: `0`,
//     boxShadow: `0 5px 5px rgba(0,0,0,0.3)`,
//   });

//   // useEffect(() => {
//   //   setXPos(window.innerWidth / 2);
//   //   setYPos(window.innerHeight / 7 - 50);
//   // }, []);

//   // useEffect(() => {
//   //   // function handleMouseMove(e: MouseEvent) {
//   //   //   setXPos(e.clientX);
//   //   //   setYPos(e.clientY);
//   //   // }
//   //   // function handleClick() {
//   //   //   setSize(10);
//   //   //   let timeoutId = setTimeout(() => {
//   //   //     setSize(5);
//   //   //   }, 200);
//   //   // }

//   //   let ele = interactEle.current;

//   //   if (ele) {
//   //     ele.addEventListener("mousemove", handleMouseMove);
//   //     ele.addEventListener("click", handleClick);
//   //   }

//   //   return () => {
//   //     interactEle.current?.removeEventListener("mousemove", handleMouseMove);
//   //     interactEle.current?.removeEventListener("click", handleClick);
//   //   };
//   // }, []);

//   return (
//     <div className={`h-full w-full`}>
//       {/* <img src="/Web-demo-playground.jpg" alt="" className="blur-3xl"/> */}
//       <div className={`h-18 w-max`} id="topBar">
//         <img src="/logo.png" alt="WebGen" className={`w-40 invert m-4`} />
//       </div>

//       <div
//         style={{ ...primeStyle, transitionTimingFunction: "ease", boxShadow: `0 0 3px rgba(0,0,0,1)` }}
//         id="mainFrame"
//         className={` aspect-video fixed z-3 transition-all bg-white duration-200 overflow-hidden`}
//       >
//         <Goals />
//       </div>
//       <div
//         style={{ ...secStyle, transitionTimingFunction: "ease", boxShadow: `0 0 3px rgba(0,0,0,1)` }}
//         id="q1Frame"
//         className={` aspect-video fixed z-[-1] bg-[green]  transition-all duration-200`}
//       >
//         <Personality />
//       </div>
//       <div
//         style={{ ...thirdStyle, transitionTimingFunction: "ease", boxShadow: `0 0 3px rgba(0,0,0,1)` }}
//         id="q2Frame"
//         className={` aspect-video fixed z-[-1] bg-[green] transition-all duration-200`}
//       >
//         <Personality />
//       </div>
//       <div
//         style={{ ...fourthStyle, transitionTimingFunction: "ease", boxShadow: `0 0 3px rgba(0,0,0,1)` }}
//         id="q3Frame"
//         className={` aspect-video fixed z-[-1] bg-[green]  transition-all duration-200`}
//       >
//         <Personality />
//       </div>

//       <div
//         style={{ boxShadow: `0 0 3px rgba(0,0,0,1)` }}
//         id="nav"
//         className={`h-18 w-full flex justify-between items-center fixed bottom-[0%] bg-[#ffffff] `}
//       >
//         <button
//           onClick={() => {
//             setSecStyle({
//               height: "40vh",
//               left: "calc(90% - 30vw)",
//               top: "calc(100vh - 40vh)",
//               zIndex: `-1`,
//               boxShadow: `0 0 0 rgba(0,0,0,0.3)`,
//             });
//             setPrimeStyle({
//               height: "70vh",
//               left: "2%",
//               top: "10%",
//               zIndex: `3`,
//               boxShadow: `0 5px 5px rgba(0,0,0,0.3)`,
//             });
//             // setProgressWidth(50);
//           }}
//           id="Back"
//           className={`h-[80%] w-[10%] mx-[2%] text-white bg-black font-bold`}
//         >
//           Back
//         </button>

//         <button
//           onClick={() => {
//             setPrimeStyle({
//               height: "40vh",
//               left: "calc(90% - 30vw)",
//               top: "calc(100vh - 40vh)",
//               zIndex: `-1`,
//               boxShadow: `0 5px 5px rgba(0,0,0,0.3)`,
//             });
//             setSecStyle({
//               height: "70vh",
//               left: "2%",
//               top: "10%",
//               zIndex: `3`,
//               boxShadow: `0 0 0 rgba(0,0,0,0.3)`,
//             });
//             // setProgressWidth(100);
//           }}
//           id="Next"
//           //   ref={nextRef}
//           className={`h-[80%] w-[10%] mx-[2%] bg-[#000000] text-white font-bold`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


//_______________________________________________


// "use client";
// import { redirect } from "next/navigation";
// import React, { useState } from "react";
// import Goals from "@/components/goals";
// import Personality from "@/components/personality";

// export default function UserPref() {
//   // an array of frame objects — each contains style props and the element to render
//   const [frames, setFrames] = useState([
//     {
//       id: "prime",
//       style: {
//         height: "75vh",
//         left: "2%",
//         top: "10%",
//         zIndex: 3,
//         boxShadow: "0 0 0 rgba(0,0,0,0.3)",
//       },
//       element: <Goals />,
//     },
//     {
//       id: "sec",
//       style: {
//         height: "35vh",
//         left: "calc(100% - 31vw)",
//         top: "10vh",
//         zIndex: 2,
//         boxShadow: "0 5px 5px rgba(0,0,0,0.3)",
//       },
//       element: <Personality />,
//     },
//     {
//       id: "third",
//       style: {
//         height: "35vh",
//         left: "calc(100% - 31vw)",
//         top: "30vh",
//         zIndex: 1,
//         boxShadow: "0 5px 5px rgba(0,0,0,0.3)",
//       },
//       element: <Personality />,
//     },
//     {
//       id: "fourth",
//       style: {
//         height: "35vh",
//         left: "calc(100% - 31vw)",
//         top: "50vh",
//         zIndex: 0,
//         boxShadow: "0 5px 5px rgba(0,0,0,0.3)",
//       },
//       element: <Personality />,
//     },
//   ]);

//   // helper to swap two frames by index
//   function swap(i, j) {
//     setFrames((prev) => {
//       const next = [...prev];
//       const tmp = next[i];
//       next[i] = next[j];
//       next[j] = tmp;
//       return next;
//     });
//   }

//   return (
//     <div className={`h-full w-full`}>
//       <div className={`h-18 w-max`} id="topBar">
//         <img src="/logo.png" alt="WebGen" className={`w-40 invert m-4`} />
//       </div>

//       {/* render frames from array */}
//       {frames.map((f, idx) => (
//         <div
//           key={f.id}
//           id={f.id}
//           style={{
//             ...f.style,
//             transitionTimingFunction: "ease",
//             boxShadow: f.style.boxShadow ?? "0 0 3px rgba(0,0,0,1)",
//           }}
//           className={`aspect-video fixed transition-all duration-200 overflow-hidden`}
//         >
//           {f.element}
//         </div>
//       ))}

//       <div
//         style={{ boxShadow: `0 0 3px rgba(0,0,0,1)` }}
//         id="nav"
//         className={`h-18 w-full flex justify-between items-center fixed bottom-[0%] bg-[#ffffff] `}
//       >
//         <button
//           onClick={() => {
//             // example: swap prime (0) with sec (1)
//             swap(0, 1);
//           }}
//           id="Back"
//           className={`h-[80%] w-[10%] mx-[2%] text-white bg-black font-bold`}
//         >
//           Back
//         </button>

//         <button
//           onClick={() => {
//             // example: swap prime (0) with sec (1)
//             swap(0, 1);
//           }}
//           id="Next"
//           className={`h-[80%] w-[10%] mx-[2%] bg-[#000000] text-white font-bold`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }