import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="text-white flex justify-between items-center pt-4 pb-2 px-7 border-b border-b-[#E5E8EB] max-[414px]:text-sm max-[414px]:px-3 max-[414px]:gap-2 ">
      <div>
        <Link to="/">Hamidu's Portfolio</Link>
      </div>
      <div>
        <nav className="flex gap-4 items-center max-[414px]:gap-2">
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
