import { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

const Transition = ({ timeline }) => {
  const trans = useRef(null);

  useEffect(() => {
    timeline.to(trans.current, {
      duration: 3,
      delay: 0.1,
      x: 2600,
      ease: Power4.easeOut,
    });
  });

  return (
    <div>
      <div
        className="absolute z-50 bg-white top-0 w-full h-screen"
        ref={trans}
      ></div>
    </div>
  );
};

export default Transition;
