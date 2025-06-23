import React from "react";
import Card from "../components/card";

const Homepage = () => {
  return (
    <div className="w-[50%] mx-auto pt-4 flex flex-col gap-3 ">
      <div className="bg-[url(/bg-banner.png)] h-[300px] w-full bg-cover relative">
        <div className="absolute bottom-5 left-1/4 text-white flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Hamidu Sodiq Omeiza</h1>
          <p className="text-sm">Full-Stack Web+Mobile Developer</p>
        </div>
      </div>
      <div className="text-white flex flex-col gap-2">
        <h1 className="font-bold text-lg ">About Me</h1>
        <p className="text-sm">
          I'm a full-stack developer with a passion for creating innovative and
          user-friendly web and mobile applications. With a storing foundation
          in both front-end and back-end technologies, I enjoy tackling complex
          challenges and delivering high-quality solutions. My goal is to build
          impactful produts that make a difference
        </p>
      </div>
      <div className="text-white flex flex-col gap-2">
        <h1 className="font-bold text-lg">Skills</h1>
        <div className="flex flex-wrap gap-2">
          <Card>React</Card>
          <Card>React Native</Card>
          <Card>NodeJs</Card>
          <Card>MongoDB</Card>
          <Card>REST APIs</Card>
          <Card>Tailwind</Card>
          <Card>Git</Card>
          <Card>HTML</Card>
          <Card>CSS</Card>
        </div>
      </div>
      <div className="projects"></div>
      <div className="contact"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Homepage;
