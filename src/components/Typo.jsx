import { useRef, useLayoutEffect, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const FadeText = ({ children, className }) => {
  const parentEl = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      parentEl.current,
      { y: 0 },
      {
        scrollTrigger: {
          trigger: parentEl.current,
          toggleActions: "restart none reverse none",
          scrub: 0.6,
        },
        y: -30,
      }
    );
  }, []);

  return (
    <h2 ref={parentEl} className={`text-xl font-bold ${className}`}>
      {children}
    </h2>
  );
};

FadeText.defaultProps = {
  children: "Neki Text",
};

export const Heading = forwardRef(function Heading(props, ref) {
  const { children, className } = props;
  return (
    <h2
      className={`${className} font-aileron-heavy  text-white text-5xl sm:text-7xl lg:text-8xl isolate font-semibold transition-all duration-1000`}
      ref={ref}
    >
      {children}
    </h2>
  );
});

export const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`${className} text-white text-sm sm:text-base md:text-lg xl:text-xl font-aileron-regular`}
    >
      {children}
    </p>
  );
};

export const AnimatedHeading = ({ h1, h2, children, color }) => {
  const heading1 = useRef(null);
  const heading2 = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      heading1.current,
      { x: "-100%" },
      {
        scrollTrigger: {
          trigger: heading1.current,
          start: "top 80%",
          toggleActions: "play none reverse none",
          scrub: true,
          end: "+=300",
          id: "heading",
        },
        x: 30,
        duration: 0.3,
        ease: "circ",
      }
    );

    gsap.fromTo(
      heading2.current,
      { x: "100%" },
      {
        scrollTrigger: {
          trigger: heading1.current,
          start: "top 80%",
          toggleActions: "play none reverse none",
          scrub: true,
          id: "heading2",
          end: "+=300",
        },
        x: 30,
        duration: 0.3,
        ease: "circ",
      }
    );
  }, []);

  return (
    <div className="text-left -ml-5 sm:ml-4 xl:ml-12">
      <Heading ref={heading1} className={`!text-[${color}]`}>
        {h1}
      </Heading>
      <Heading ref={heading2} className={`!text-[${color}]`}>
        {h2}
      </Heading>
    </div>
  );
};

AnimatedHeading.defaultProps = {
  children: "Neki Tekst",
};

export const SmallHeading = ({ children, className }) => {
  return (
    <h3
      className={`text-2xl xl:text-4xl whitespace-nowrap font-aileron-bold ${className}`}
    >
      {children}
    </h3>
  );
};
