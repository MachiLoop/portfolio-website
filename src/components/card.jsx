import React from "react";

const Card = ({ children, color, styles, onClickHandler }) => {
  return (
    <div
      onClick={onClickHandler ? onClickHandler : null}
      className={`${
        color || "bg-[#21364A]"
      }  rounded-sm text-nowrap px-4 py-1 text-sm ${styles || ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
