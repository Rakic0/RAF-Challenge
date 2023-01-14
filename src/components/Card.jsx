import { useEffect, useState } from "react";
import { Paragraph } from "./Typo";

const Card = ({ title, img, style, i, status, backface, recyc }) => {
  const strokeColors = ["#fbbf24", "#84cc16", "#0ea5e9", "#f43f5e"];
  const [strokeColor, setStrokeColor] = useState(strokeColors[0]);

  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    setStrokeColor(strokeColors[getRandomNumber(0, 3)]);
  }, []);

  function ColorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, "");
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#",
      c,
      i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }

  return (
    <>
      <article
        data-index={i}
        data-status={status}
        className="relative card"
        style={style}
      >
        <div className="card--back">
          <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-96 absolute left-1/2 -translate-x-1/2 -z-10">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 178 244.94"
              stroke={strokeColor}
              fill={ColorLuminance(strokeColor, -0.2)}
            >
              <rect
                className="cls-2"
                x="3"
                y="3"
                width="172"
                height="238"
                rx="12"
              />
            </svg>
          </div>

          <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-96 absolute left-1/2 -translate-x-1/2 p-4 xs:p-10">
            <h3 className="text-2xl text-center font-bold text-white mb-2 xs:text-3xl xs:mb-8">
              {recyc === "yes"
                ? "Može da se reciklira"
                : "Ne može da se reciklira"}
            </h3>
            <Paragraph>{backface}</Paragraph>
          </div>
        </div>

        <div className="card--front">
          <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-96 absolute left-1/2 -translate-x-1/2 isolate">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 178 244.94"
              stroke={strokeColor}
            >
              <rect
                className="cls-1"
                x="3"
                y="3"
                width="172"
                height="238"
                rx="12"
              />
            </svg>
          </div>

          <div className="isolate w-[70%] sm:w-[50%] lg:w-96 absolute left-1/2 -translate-x-1/2">
            <img src={img} alt={title} />
          </div>
          <p className="absolute isolate font-bold text-3xl md:text-4xl left-1/2 -translate-x-1/2 top-[80vmin] sm:top-[60vmin] md:top-[55vmin] lg:top-[45vmin] text-center">
            {title}
          </p>
        </div>
      </article>
    </>
  );
};

export default Card;
