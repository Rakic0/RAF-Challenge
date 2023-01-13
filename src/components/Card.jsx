import { useEffect, useState } from "react";

const Card = ({ title, img, style, recyc, i, status }) => {
  const strokeColors = ["#fbbf24", "#84cc16", "#0ea5e9", "#f43f5e"];
  const [strokeColor, setStrokeColor] = useState(strokeColors[0]);

  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    setStrokeColor(strokeColors[getRandomNumber(0, 3)]);
  }, []);

  return (
    <>
      <article
        data-recyc={`${recyc}`}
        data-index={i}
        data-status={status}
        className="relative card"
        style={style}
      >
        <div className="w-[80%] absolute left-1/2 -translate-x-1/2 isolate">
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

        <div className="isolate w-[70%] absolute left-1/2 -translate-x-1/2">
          <img src={img} alt={title} />
        </div>
        <p className="absolute isolate font-bold text-3xl left-1/2 -translate-x-1/2 top-[80vmin] text-center">
          {title}
        </p>
      </article>
    </>
  );
};

export default Card;
