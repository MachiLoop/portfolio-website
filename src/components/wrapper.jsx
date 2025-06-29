import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-sm:w-full max-sm:px-3 w-[52%] mx-auto pt-4 flex flex-col gap-6 ">
      {children}
    </div>
  );
};

export default Wrapper;
