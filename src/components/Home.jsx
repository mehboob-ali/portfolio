import React from "react";
import profilepic from "../assets/images/profilepic.png";
function Home() {
  return (
    <div className=" px-8 items-center justify-center flex flex-col">
      <div className=" p-2 border-2 rounded-full w-48">
        <img src={profilepic} className=""></img>
      </div>
      <p className="text-white">
        As a passionate MERN Stack developer, I thrive on building dynamic and
        responsive web applications. With a solid foundation in JavaScript,
        React, Node.js, and MongoDB, I focus on creating seamless user
        experiences backed by efficient code. My academic journey, including a
        Master’s in Computer Application, has equipped me with a deep
        understanding of both frontend and backend development. I enjoy learning
        new technologies and tackling complex challenges to deliver modern,
        user-centric solutions. Let’s build something great together!
      </p>
    </div>
  );
}

export default Home;
