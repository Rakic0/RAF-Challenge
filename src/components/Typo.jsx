import { useEffect, useState, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const FadeText = ({ children, className }) => {
  const scrollTop = document.documentElement.scrollTop;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <h3
      className={`text-xl font-bold ${className}`}
      style={{
        transform: `translateY(${offset * 0.02}px)`,
        opacity: scrollTop / 1200,
      }}
    >
      {children}
    </h3>
  );
};

export const Heading = ({ children, className }) => {
  return (
    <h2
      className={`${className} text-white text-4xl sm:text-5xl isolate font-semibold transition-all duration-1000`}
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className }) => {
  return (
    <p className={`${className} text-white text-sm sm:text-base md:text-lg`}>
      {children}
    </p>
  );
};

export const AnimatedHeading = ({ h1, h2, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="ml-4">
      <Heading
        className={`${
          inView && "show"
        } text-5xl sm:!text-6xl -translate-x-full`}
      >
        {h1}
      </Heading>
      <Heading
        className={`${inView && "show"} text-5xl sm:!text-6xl translate-x-full`}
      >
        {h2}
      </Heading>
    </div>
  );
};
