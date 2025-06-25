import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="text-white flex justify-between items-center pt-4 pb-2 px-7 border-b border-b-[#E5E8EB]">
      <div>
        <Link to="/">Hamidu's Portfolio</Link>
      </div>
      <div>
        <nav className="flex gap-4 items-center">
          <Link to="/#about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
          <a
            href="/Sodiq_Hamidu_resume.pdf"
            download
            className="bg-[#3D99F5] px-1 rounded-md py-1 "
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
