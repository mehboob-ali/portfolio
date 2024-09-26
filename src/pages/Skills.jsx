import React from "react";
import reactlogo from "../assets/images/react-logo.png";
import tailwindlogo from "../assets/images/tailwind-logo.png";
import reduxlogo from "../assets/images/redux-logo.png";
import htmllogo from "../assets/images/html-logo.png";
import csslogo from "../assets/images/css-logo.png";
import javascriptlogo from "../assets/images/javascript-logo.png";
import githublogo from "../assets/images/github-logo.png";
import firebaselogo from "../assets/images/firebase-logo.png";

function Skills() {
  return (
    <div className="flex gap-8 flex-0 flex-wrap">
      <div className=" items-center justify-around gap-2 flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 content-center w-28">
          <img src={htmllogo} className="w-28 h-auto" />
        </div>
        <span className=" text-white text-xl bottom-0 ">HTML</span>
      </div>
      <div className=" items-center justify-around gap-2 flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 content-center w-28">
          <img src={csslogo} className="w-28 h-auto" />
        </div>
        <span className=" text-white text-xl bottom-0 ">CSS</span>
      </div>
      <div className=" items-center justify-around gap-2 flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 content-center w-28">
          <img src={javascriptlogo} className="w-28 h-auto" />
        </div>
        <span className=" text-white text-xl bottom-0 ">JavaScript</span>
      </div>
      <div className=" items-center justify-around flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 w-28">
          <img src={reactlogo} className="w-28 h-auto" />
        </div>{" "}
        <span className=" text-white text-xl">React</span>
      </div>
      <div className=" items-center justify-around gap-2 flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 content-center w-28">
          <img src={reduxlogo} className="w-28 h-auto" />
        </div>
        <span className=" text-white text-xl bottom-0 ">Redux</span>
      </div>
      <div className=" items-center justify-around gap-2 flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 content-center w-28">
          <img src={tailwindlogo} className="w-28 h-auto" />
        </div>
        <span className=" text-white text-xl bottom-0 ">Tailwind</span>
      </div>
      <div className=" items-center justify-around gap-2 flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 content-center w-28">
          <img src={firebaselogo} className="w-28 h-auto" />
        </div>
        <span className=" text-white text-xl bottom-0 ">Firebase</span>
      </div>
      <div className=" items-center justify-around gap-2 flex flex-col bg-gray-800 rounded-xl p-2">
        <div className=" h-28 content-center w-28">
          <img src={githublogo} className="w-28 h-auto " />
        </div>
        <span className=" text-white text-xl bottom-0 ">Git</span>
      </div>
    </div>
  );
}

export default Skills;
