import React from "react";

const Homepage = () => {
  return (
    <div className="w-[50%] mx-auto pt-4">
      <div className="bg-[url(/bg-banner.png)] h-[300px] w-full bg-cover relative">
        <div className="absolute bottom-5 left-1/4 text-white flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Hamidu Sodiq Omeiza</h1>
          <p className="text-sm">Full-Stack Web+Mobile Developer</p>
        </div>
      </div>
      <div className="about-me"></div>
      <div className="skills"></div>
      <div className="projects"></div>
      <div className="contact"></div>
      <div className="footer"></div>
    </div>
  );
};

//  <p>
//           I'm a full-stack developer with a passion for creating innovative and
//           user-friendly web applications. With a strong foundation in both
//           front-end and back-end technologies, I enjoy tackling complex
//           challenges and delivering high-quality solutions. My goal is to build
//           impactful products that make a difference.
//         </p>

export default Homepage;
