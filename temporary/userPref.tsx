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


//_________________________________
// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   X, 
//   Menu, 
//   Square, 
//   Bell, 
//   HelpCircle, 
//   Settings, 
//   Home, 
//   FileText, 
//   Briefcase, 
//   Calendar, 
//   ShoppingCart, 
//   BookOpen,
//   MonitorPlay // Using this for "Pages" icon
// } from 'lucide-react'; // Using lucide-react for icons

// // Type definitions for history items
// interface ChatHistoryItem {
//   id: number;
//   title: string;
//   date: string;
// }

// // Type definitions for pages to add
// interface PageOption {
//   id: string;
//   name: string;
//   recommended: boolean;
//   icon: React.ElementType; // For Lucide icons
// }

// const TemplateGeneratorV2: React.FC = () => {
//   const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
//   const [prompt, setPrompt] = useState<string>("");
//   const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set(["about", "contact", "services", "appointments", "shop", "course"])); // All selected by default as in image

//   // Mock Data for Chat History (from previous request, adjusted slightly)
//   const historyItems: ChatHistoryItem[] = [
//     { id: 1, title: "Minimalist Portfolio v1", date: "2 mins ago" },
//     { id: 2, title: "E-commerce Landing Page", date: "1 hour ago" },
//     { id: 3, title: "Blog Template Dark Mode", date: "Yesterday" },
//     { id: 4, title: "SaaS Pricing Table", date: "2 days ago" },
//   ];

//   // Data for "Add pages to your site" section, matching the screenshot
//   const pageOptions: PageOption[] = [
//     { id: "about", name: "About", recommended: true, icon: FileText },
//     { id: "contact", name: "Contact", recommended: true, icon: Bell }, // Placeholder icon
//     { id: "services", name: "Services", recommended: true, icon: Briefcase },
//     { id: "appointments", name: "Appointments", recommended: true, icon: Calendar },
//     { id: "shop", name: "Shop", recommended: true, icon: ShoppingCart },
//     { id: "course", name: "Course", recommended: false, icon: BookOpen },
//   ];

//   const handlePageToggle = (pageId: string) => {
//     setSelectedPages(prev => {
//       const newSelection = new Set(prev);
//       if (newSelection.has(pageId)) {
//         newSelection.delete(pageId);
//       } else {
//         newSelection.add(pageId);
//       }
//       return newSelection;
//     });
//   };

//   return (
//     <div className="flex h-screen w-full bg-[#f6f6f6] font-sans text-[#333] overflow-hidden">
      
//       {/* -------------------- LEFT SIDEBAR/BACKGROUND (matches the muted grey) -------------------- */}
//       <aside className="relative w-1/2 bg-[#eaeaea] flex flex-col items-start justify-start p-6">
        
//         {/* Top-left fixed section with Blueprint AI and icons */}
//         <div className="absolute top-0 left-0 w-full bg-[#3d3d3d] text-white flex items-center h-14 px-6 space-x-4">
//           <div className="flex items-center space-x-2">
//             <Square size={20} className="text-gray-400" />
//             <span className="text-sm font-medium tracking-wide">BLUEPRINT AI</span>
//           </div>
//           <div className="flex-grow flex justify-center items-center space-x-1 ml-10">
//             <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
//               <ChevronLeft size={18} className="text-gray-400" />
//             </button>
//             <span className="px-4 text-sm text-gray-300">About</span>
//             <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
//               <ChevronRight size={18} className="text-gray-400" />
//             </button>
//           </div>
//         </div>

//         {/* This is the main content area with "Your Site Title" and the preview image */}
//         <div className="relative mt-20 p-6 bg-white rounded-lg shadow-lg w-[85%] h-[75%] max-w-[800px] overflow-hidden flex flex-col">
//             <h2 className="text-lg font-medium text-gray-700 mb-4">Your Site Title</h2>
//             <div className="flex-1 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center relative">
//                 <Image 
//                     src="/squarespace-preview-mock.png" // This image will be generated later
//                     alt="Website Preview"
//                     layout="fill"
//                     objectFit="cover"
//                     className="brightness-[0.8] contrast-[1.1]"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center p-8 text-white text-4xl md:text-5xl font-bold text-center leading-tight">
//                     Show the world your brand's spark
//                 </div>
//             </div>
//              {/* Scrollbar on the right */}
//              <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-gray-200 to-transparent opacity-50 pointer-events-none z-10"></div>
//         </div>


//         {/* Bottom Navigation */}
//         <div className="absolute bottom-0 left-0 w-full flex items-center justify-between h-16 bg-[#3d3d3d] text-white px-6">
//           <button className="bg-transparent text-gray-400 hover:text-white transition-colors text-sm font-medium py-2 px-4 rounded">
//             BACK
//           </button>
//           <div className="flex space-x-8 text-sm text-gray-300">
//             <span className="border-b-2 border-white pb-1 text-white font-semibold">Topic</span>
//             <span>Goals</span>
//             <span>Site Info</span>
//             <span>Homepage</span>
//             <span>Pages</span>
//             <span>Colors</span>
//             <span>Fonts</span>
//           </div>
//           <button className="bg-[#4d7dff] hover:bg-[#3b6ae0] text-white text-sm font-medium py-2 px-6 rounded transition-colors">
//             NEXT
//           </button>
//         </div>
//       </aside>

//       {/* -------------------- RIGHT SIDEBAR (the dynamic Squarespace UI section) -------------------- */}
//       <aside className="relative w-1/2 bg-white shadow-xl flex flex-col">
//         {/* Close Button at top right */}
//         <button className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
//           <X size={20} className="text-gray-500" />
//         </button>

//         <div className="p-8 pb-4 border-b border-gray-200">
//           <h2 className="text-2xl font-semibold mb-2">Add pages to your site</h2>
//           <p className="text-gray-600 text-sm">
//             You can always add or remove pages later. We added some recommendations based on your
//             site goals.
//           </p>
//         </div>

//         {/* Page Selection Area */}
//         <div className="flex-1 overflow-y-auto px-8 py-4 custom-scrollbar">
//           {pageOptions.map((page) => (
//             <label 
//               key={page.id} 
//               className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 cursor-pointer"
//             >
//               <div className="flex items-center space-x-3">
//                 <input
//                   type="checkbox"
//                   checked={selectedPages.has(page.id)}
//                   onChange={() => handlePageToggle(page.id)}
//                   className="form-checkbox h-5 w-5 text-[#4d7dff] rounded border-gray-300 focus:ring-[#4d7dff]"
//                 />
//                 <span className="text-base text-gray-800">{page.name}</span>
//               </div>
//               {page.recommended && (
//                 <span className="bg-[#e6efff] text-[#4d7dff] text-xs px-2 py-1 rounded-full font-medium">
//                   Recommended
//                 </span>
//               )}
//             </label>
//           ))}
//         </div>

//         {/* Footer for the right sidebar, if needed, or just padding */}
//         <div className="p-8 border-t border-gray-100 flex justify-end">
//             <button className="bg-[#4d7dff] hover:bg-[#3b6ae0] text-white text-sm font-medium py-2 px-6 rounded transition-colors">
//                 NEXT
//             </button>
//         </div>
//       </aside>

//       {/* -------------------- HISTORY SLIDER (Overlaying the Right Sidebar) -------------------- */}
//       {/* This is the sliding history panel that overlays the right-hand "Add pages to your site" section. */}
//       {/* It will slide in from the right when activated. */}
//       <div 
//         className={`
//           absolute right-0 top-0 h-full w-[40%] bg-white shadow-2xl transition-transform duration-500 ease-in-out z-20
//           ${isHistoryOpen ? 'translate-x-0' : 'translate-x-full'}
//           flex flex-col
//         `}
//       >
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h3 className="text-lg font-semibold">Chat History</h3>
//           <button 
//             onClick={() => setIsHistoryOpen(false)}
//             className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//           >
//             <X size={20} className="text-gray-500" />
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar">
//           {historyItems.map((item) => (
//             <div key={item.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
//               <p className="font-medium text-gray-800">{item.title}</p>
//               <p className="text-sm text-gray-500">{item.date}</p>
//             </div>
//           ))}
//         </div>

//         <div className="p-6 border-t border-gray-200">
//           <button className="w-full bg-[#4d7dff] hover:bg-[#3b6ae0] text-white py-3 rounded-lg text-base font-medium transition-colors">
//             Start New Chat
//           </button>
//         </div>

//       </div>

//       {/* -------------------- HISTORY TOGGLE BUTTON (Fixed to the right edge of the main content) -------------------- */}
//       {/* This button toggles the history slider. Positioned to match the initial wireframe's history tab. */}
//       <button 
//         onClick={() => setIsHistoryOpen(!isHistoryOpen)}
//         className={`
//           absolute top-1/2 -translate-y-1/2 right-0 -mr-6 md:-mr-10 xl:-mr-12 z-30 // Adjusted margin-right
//           w-10 h-24 bg-[#eaeaea] text-gray-600 hover:bg-[#dcdcdc] transition-colors
//           flex items-center justify-center rounded-l-lg shadow-lg
//           ${isHistoryOpen ? 'hidden' : ''} // Hide when history is open
//           [writing-mode:vertical-rl] rotate-180 // For vertical text
//           text-xs font-bold uppercase tracking-wider
//         `}
//       >
//         {/* <History size={16} className="mb-2" /> HISTORY */}
//       </button>

//     </div>
//   );
// };

// export default TemplateGeneratorV2;
