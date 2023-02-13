import Cards from "./Cards";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
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
    <div className="relative">
      <div className="h-[115vmin] sm:h-[90vmin] md:h-[70vmin] lg:h-[60vmin]">
        <Cards />
      </div>

      <div className="flex items-center w-full justify-center gap-12">
        <button
          className="border-2 border-white p-2 rounded-full cursor-pointer hover:bg-white group transition-all"
          onClick={handleNotRecyclable}
        >
          <BsChevronLeft className="text-2xl sm:text-3xl 2xl:text-4xl text-white group-hover:text-[#a5c33a]" />
        </button>

        <button
          className="border-2 border-white p-2 rounded-full cursor-pointer hover:bg-white group transition-all"
          onClick={handleRecyclable}
        >
          <BsChevronRight className="text-2xl sm:text-3xl 2xl:text-4xl text-white group-hover:text-[#a5c33a]" />
        </button>
      </div>

      <span className="text-xs absolute top-[85%] md:top-[88%] 2xl:top-[85%] left-1/2 -translate-x-1/2">
        Stavite kursor na karticu
      </span>
    </div>
  );
};

export default CardSwiper;
