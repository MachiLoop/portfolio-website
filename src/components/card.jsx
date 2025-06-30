import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Card = ({ children, color, styles, onClickHandler }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;

    const onEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        y: -5,
        boxShadow: "0px 8px 15px rgba(61, 153, 245, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        y: 0,
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      onClick={onClickHandler ? onClickHandler : null}
      ref={cardRef}
      className={`${
        color || "bg-[#21364A]"
      }  rounded-sm text-nowrap px-4 py-1 text-sm ${styles || ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
