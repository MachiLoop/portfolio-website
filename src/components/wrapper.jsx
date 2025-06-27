import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-[52%] mx-auto pt-4 flex flex-col gap-6 ">{children}</div>
  );
};

export default Wrapper;
