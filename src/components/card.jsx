import React from "react";

const Card = ({ children, color, styles }) => {
  return (
    <div
      className={`${
        color || "bg-[#21364A]"
      } rounded-sm text-nowrap px-4 py-0.5 text-sm`}
    >
      {children}
    </div>
  );
};

export default Card;
