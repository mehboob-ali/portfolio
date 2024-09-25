import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";

function Projects() {
  return (
    <div className="grid  grid-cols-1 p-4 ">
      <div className=" flex gap-4 rounded-xl ">
        <img className=" w-96 h-96 object-cover rounded-lg" src={project1} />
        <div>
        <p className=" text-white">
          {" "}
          • Developed a dynamic shopping cart application utilizing React for
          seamless user interaction. • Leveraged Redux and its toolkit for state
          management, resulting in efficient data handling and enhanced user
          experience. •.
        </p>
        <button className="bg-blue-400 p-4 mt-8 rounded-xl text-white text-2xl">Live Link</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
