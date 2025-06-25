import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-col gap-4 justify-center items-center mt-24">
      <div className="flex gap-3">
        <div>
          <a
            href="https://www.x.com/dVoice00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="twitter.png"
              alt="Twitter"
              className="rounded shadow-lg hover:opacity-80 transition"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/hsodiq14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="linkedin.png"
              alt="LinkedIn"
              className="rounded shadow-lg hover:opacity-80 transition"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.github.com/Machiloop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github.png"
              alt="Github"
              className="rounded shadow-lg hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>
      <div>
        <p className="text-[#8FADCC] text-sm ">
          ©️ 2025 Hamidu Sodiq. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
