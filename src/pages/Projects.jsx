import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";

function Projects() {
  return (
    <div className="grid grid-cols-1">
      {/* 1st Project */}
      <div className="flex gap-4 rounded-xl">
        <div className="w-40 h-28 flex-shrink-0">
          <img
            className="w-full h-full object-cover object-right-top rounded-lg"
            src={project1}
            alt="Shopping Cart App"
          />
        </div>
        <div>
          <h1 className="text-xl text-white pb-4">Shopping Cart App</h1>
          <p className="text-gray-400">
            Developed a dynamic shopping cart application utilizing React for
            seamless user interaction. Leveraged Redux and its toolkit for state
            management, resulting in efficient data handling and enhanced user
            experience.
          </p>
          <div className="gap-2 flex mt-8">
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              React
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Redux
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Tailwind
            </button>
          </div>
        </div>
      </div>

      {/* 2nd Project */}

      <div className="flex gap-4 py-8 rounded-xl">
        <div className="w-40 h-28 flex-shrink-0">
          <img
            className="w-full h-full object-cover object-right-top rounded-lg"
            src={project2}
            alt="Weather App"
          />
        </div>
        <div className="w-full">
          <h1 className="text-xl text-white pb-4">Weather App</h1>
          <p className="text-gray-400">
            Developed a weather app using React, API integration, and Tailwind
            CSS, showcasing real-time and forecast weather. Integrated APIs to
            deliver accurate real-time weather information.
          </p>
          <div className="gap-2 flex mt-8">
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              React
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              API Integration
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Tailwind
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Git
            </button>
          </div>
        </div>
      </div>

      {/* 3rd Project */}

      <div className="flex pt-8 w-full gap-4 rounded-xl">
        <div className="w-40 h-28 flex-shrink-0">
          <img
            className="w-full h-full object-cover object-left-top rounded-lg"
            src={project3}
            alt="XLSV Catcher"
          />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-xl text-white pb-4">XLSV Catcher</h1>
          <p className="text-gray-400">
            Developed a React.js front-end application that allows users to
            upload CSV and Excel files. Implemented file validation to ensure
            only valid file formats are accepted. Utilized Redux for state
            management to handle file uploads and data storage.
          </p>
          <div className="gap-2 flex mt-8">
            <button className="bg-cyan-800 p-2  rounded-full text-cyan-200 text-xs">
              React
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Redux
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Material UI
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Git
            </button>
            <button className="bg-cyan-800 p-2 rounded-full text-cyan-200 text-sm">
              Sheet.js
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
