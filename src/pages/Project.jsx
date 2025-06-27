import React from "react";
import Wrapper from "../components/wrapper";
import Card from "../components/card";

const Project = () => {
  return (
    <Wrapper>
      <div className="heading  flex flex-col gap-0.5 ">
        <h1 className="mt-10 text-white font-bold text-2xl ">Projects</h1>
        <p className="text-[#9CADBF] text-sm ">
          A curated collection of my works, showcasing my skills and experience
          in full-stack development
        </p>
      </div>
      <div className="flex flex-col gap-3 rounded-md">
        <div className="flex bg-[#21364A] py-2 px-3 rounded-md">
          <img src="search.png" alt="search icon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Projects"
            className="outline-none w-full h-full text-[#9CADBF] px-2 "
          />
        </div>
        <div className="flex gap-2 text-white ">
          <Card styles="cursor-pointer">All</Card>
          <Card styles="cursor-pointer">Web Development</Card>
          <Card styles="cursor-pointer">Mobile Development</Card>
        </div>
      </div>
      <div className="projects-list grid grid-cols-3 gap-x-3 gap-y-6">
        {/* section 1 */}
        <div className="text-sm flex flex-col gap-3">
          <div className="h-40">
            <img
              src="image1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <a href="/" className="text-white font-semibold">
              E-commerce Platform
            </a>
            <p className="text-[#9CADBF]">
              A full-featured e-commerce platform with user authentication,
              product management and payment integration
            </p>
          </div>
        </div>

        {/* section 2 */}
        <div className="text-sm flex flex-col gap-3">
          <div className="h-40">
            <img
              src="image2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <a href="/" className="text-white font-semibold">
              E-commerce Platform
            </a>
            <p className="text-[#9CADBF]">
              A full-featured e-commerce platform with user authentication,
              product management and payment integration
            </p>
          </div>
        </div>

        {/* section 3 */}
        <div className="text-sm flex flex-col gap-3">
          <div className="h-40">
            <img
              src="image3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <a href="/" className="text-white font-semibold">
              E-commerce Platform
            </a>
            <p className="text-[#9CADBF]">
              A full-featured e-commerce platform with user authentication,
              product management and payment integration
            </p>
          </div>
        </div>

        {/* section 4 */}
        <div className="text-sm flex flex-col gap-3">
          <div className="h-40">
            <img
              src="image2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <a href="/" className="text-white font-semibold">
              E-commerce Platform
            </a>
            <p className="text-[#9CADBF]">
              A full-featured e-commerce platform with user authentication,
              product management and payment integration
            </p>
          </div>
        </div>

        {/* section 5 */}
        <div className="text-sm flex flex-col gap-3">
          <div className="h-40">
            <img
              src="image3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <a href="/" className="text-white font-semibold">
              E-commerce Platform
            </a>
            <p className="text-[#9CADBF]">
              A full-featured e-commerce platform with user authentication,
              product management and payment integration
            </p>
          </div>
        </div>

        {/* section 6 */}
        <div className="text-sm flex flex-col gap-3">
          <div className="h-40">
            <img
              src="image1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <a href="/" className="text-white font-semibold">
              E-commerce Platform
            </a>
            <p className="text-[#9CADBF]">
              A full-featured e-commerce platform with user authentication,
              product management and payment integration
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
