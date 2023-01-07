import data from "../data/howToRecycle.json";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ data: { id, open }, className, setModalData }) => {
  return (
    <div
      className={`${className} transition-all flex flex-col items-center justify-center absolute center z-40 w-[90%] bg-white min-h-[40%] rounded-full border-8 ${
        id === 6 ? "border-green-500" : "border-red-500"
      } ${
        open
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      } `}
    >
      <RxCross2
        className="text-3xl absolute top-12 z-40 hover:cursor-pointer"
        onClick={() => setModalData((prev) => ({ ...prev, open: false }))}
      />
      {data.map((item) => {
        if (item.id !== id) return;

        return (
          <div className="text-center">
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-base">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
