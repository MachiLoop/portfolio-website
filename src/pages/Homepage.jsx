import React from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../components/wrapper";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    // <div className="w-[52%] mx-auto pt-4 flex flex-col gap-6 ">
    <Wrapper>
      <div className="bg-[url(/bg-banner.png)] h-[300px] w-full bg-cover relative">
        <div className="absolute bottom-5 left-1/4 text-white flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Hamidu Sodiq Omeiza</h1>
          <p className="text-sm">Full-Stack Web+Mobile Developer</p>
        </div>
      </div>
      <section id="about" className="text-white flex flex-col gap-2">
        <h1 className="font-bold text-lg ">About Me</h1>
        <p className="text-sm">
          I'm a full-stack developer with a passion for creating innovative and
          user-friendly web and mobile applications. With a storing foundation
          in both front-end and back-end technologies, I enjoy tackling complex
          challenges and delivering high-quality solutions. My goal is to build
          impactful produts that make a difference
        </p>
      </section>
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
      <section id="projects" className="projects flex gap-2 flex-col">
        <h1 className="text-white text-lg font-bold">Featured Projects</h1>
        <div className="projects-wrapper flex flex-col gap-5">
          <div className="project-wrapper grid [grid-template-columns:42%_58%] gap-3">
            <div className="h-40 image-wrapper">
              <img
                src="/image1.jpg"
                alt="project-1"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex gap-3">
              <div>
                <h1 className="text-white font-bold text-base">
                  Project Alpha
                </h1>
                <p className="text-[#8FADCC] text-sm">
                  A web application for managing tasks and projects
                </p>
              </div>
              <div className="self-center text-white">
                <Card color="bg-[#3D99F5]">View Project</Card>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid [grid-template-columns:42%_58%] gap-3">
            <div className="h-40 image-wrapper">
              <img
                src="/image2.jpg"
                alt="project-1"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex gap-3">
              <div>
                <h1 className="text-white font-bold text-base">Project Beta</h1>
                <p className="text-[#8FADCC] text-sm">
                  An e-commerce platform for selling digital products
                </p>
              </div>
              <div className="self-center text-white">
                <Card color="bg-[#3D99F5]">View Project</Card>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid [grid-template-columns:42%_58%] gap-3">
            <div className="h-40 image-wrapper">
              <img
                src="/image3.jpg"
                alt="project-1"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex gap-3">
              <div>
                <h1 className="text-white font-bold text-base">
                  Project Gamma
                </h1>
                <p className="text-[#8FADCC] text-sm">
                  A social media platform for sharing ideas and connecting with
                  others
                </p>
              </div>
              <div className="self-center text-white">
                <Card color="bg-[#3D99F5]">View Project</Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact flex flex-col gap-3">
        <h1 className="text-white font-bold text-lg">Contact</h1>
        <div className="text-[#8FADCC] flex flex-col gap-4 flex-auto max-w-xs">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="bg-[#21364A] py-2 px-3 rounded-md"
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Email"
            className="bg-[#21364A] py-2 px-3 rounded-md"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="bg-[#21364A] py-2 px-3 rounded-md resize-none h-28"
          />
        </div>
        <div className="self-start text-white">
          <Card color="bg-[#3D99F5]">Send Message</Card>
        </div>
      </section>
      {/* <Footer /> */}
      {/* </div> */}
    </Wrapper>
  );
};

export default Homepage;
