import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Button = ({ children, className, onClick }) => {
  const btn = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      btn.current,
      { scale: 0.2 },
      {
        scrollTrigger: {
          trigger: btn.current,
          start: "top bottom",
        },
        scale: 1,
        ease: "elastic",
      }
    );
  }, []);

  return (
    <button
      ref={btn}
      className={`${className} bg-white rounded-full p-2 cursor-pointer flex items-center justify-center relative`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
