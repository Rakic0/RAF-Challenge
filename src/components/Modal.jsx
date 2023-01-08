import data from "../data/howToRecycle.json";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const Modal = ({ data: { id, open }, className, setModalData }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    let col = id === 6 ? "#84cc16" : "#ef4444";
    setColor(col);
  }, [open, id]);

  return (
    <div
      className={`${
        open
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      } transition-opacity relative z-30`}
      onClick={() => setModalData((prev) => ({ ...prev, open: false }))}
    >
      <div className="absolute w-[90%] sm:w-[70%] lg:w-[55%] xl:w-[42rem] top-[50vh] left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 343.41 343.41"
          stroke={color}
        >
          <defs></defs>
          <circle className="cls-1" cx="171.7" cy="171.7" r="167.7" />
        </svg>
      </div>
      <div className="absolute z-40 top-[50vh] left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <RxCross2 className="text-4xl hover:cursor-pointer absolute top-8 hidden bg-gray-200 rounded-full p-2" />
        {data.map((item) => {
          if (item.id !== id) return;

          return (
            <div className="text-center lg:px-4 xl:w-[40rem]">
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2">
                {item.title}
              </h2>
              <p className="text-xs sm:text-base md:text-lg">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;

{
}
