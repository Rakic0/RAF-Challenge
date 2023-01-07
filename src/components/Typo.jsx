import { useEffect } from "react";

export const FadeText = ({ children, className }) => {
  const scrollTop = document.documentElement.scrollTop;

  return (
    <h3
      className={`text-xl font-bold ${className}`}
      style={{
        opacity: scrollTop / 1200,
      }}
    >
      {children}
    </h3>
  );
};
