import Cards from "./Cards";
import { FaRecycle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useLayoutEffect, useState } from "react";

const CardSwiper = () => {
  let activeIndex = 0;
  const [groups, setGroups] = useState(document.querySelectorAll(".card"));
  const [score, setScore] = useState(0);

  useLayoutEffect(() => {
    setGroups(document.querySelectorAll(".card"));
  }, []);

  const handleNotRecyclable = () => {
    const nextIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    // prettier-ignore
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  const handleRecyclable = () => {
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    // prettier-ignore
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  return (
    <div>
      <div className="h-[115vmin]">
        <Cards />
      </div>

      <div className="flex items-center w-full justify-center gap-12">
        <button
          className="border-2 border-white p-2 rounded-full cursor-pointer hover:bg-white group transition-all"
          onClick={handleNotRecyclable}
        >
          <RxCross2 className="text-2xl text-white group-hover:text-fuchsia-600" />
        </button>

        <button
          className="border-2 border-fuchsia-600 p-2 rounded-full cursor-pointer hover:bg-fuchsia-600 group transition-all"
          onClick={handleRecyclable}
        >
          <FaRecycle className="text-2xl text-fuchsia-600 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CardSwiper;
