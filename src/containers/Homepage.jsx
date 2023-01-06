import { useLayoutEffect, useState } from "react";
import classnames from "classnames";

// Componentrs
import { FadeText } from "../components/Typo";

// IMGs
import Paper from "../assets/paper/paper_1.png";

// Icons
import { RxDotFilled } from "react-icons/rx";
import Dots from "../components/Dots";

const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Homepage = () => {
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})
  );

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * (viewportHeight / 4);
        console.log(map);
        return map;
      }, {});

      setVisibleImagesMap(newVisibleImagesMap);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#fdd85f] overflow-hidden p-2">
      <header className="gradient-bg p-1 pt-16 min-h-[95vh] relative">
        <div className="text-center mt-4">
          <ul>
            <li>
              <h1 className="text-[10vw] text-opacity-50 font-bold text-amber-700">
                Život
              </h1>
            </li>
            <li>
              <h1 className="text-[20vw] text-opacity-50 font-bold text-amber-700 -mt-8 sm:-mt-12 lg:-mt-24 2xl:-mt-44">
                reciklaže
              </h1>
            </li>
          </ul>
        </div>

        <div className="ui-fragments">
          <div className="absolute w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              class="animate-spin-slow"
              aria-hidden="true"
            >
              <circle
                opacity=".2"
                cx="128"
                cy="128"
                r="127"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="0.1 10"
              ></circle>
            </svg>
          </div>

          <div className="absolute w-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 372 374"
              class="animate-spin-backwards-slow"
              aria-hidden="true"
            >
              <circle
                opacity=".1"
                cx="185"
                cy="187"
                r="185"
                stroke="#000"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="0.1 20"
              ></circle>
            </svg>
          </div>

          <Dots className="-bottom-44" />
        </div>

        <div className="sticky ml-4">
          <div className="frame">
            {images.map((image) => {
              return (
                <div
                  className={classnames("image", `image_${image}`, {
                    image_visible: visibleImagesMap[image],
                    image_invisible: visibleImagesMap[image + 1],
                  })}
                  key={image}
                />
              );
            })}
          </div>
        </div>

        <div className="w-1/2 absolute right-4 bottom-4">
          <div className="flex items-center">
            <RxDotFilled className="text-2xl" />
            <hr className="bg-black text-black h-0.5 border-0 w-full -ml-2" />
          </div>
          <h3 className="text-sm font-bold ml-2">
            Ekosistemima nisu potrebni ljudi. Ljudima su potrebni ekosistemi
          </h3>
        </div>
      </header>

      <main>
        {/* Intro */}
        <section className="relative">
          <div className="ui-fragments">
            <Dots className="bottom-24" />
          </div>

          <div className=" h-screen flex items-center justify-center">
            <FadeText className="px-2 text-center relative z-10">
              Recikliranje je jednostavan i efikasan način da se smanji otpad,
              štede resursi i zaštiti okolina. Krenite sa recikliranjem danas i
              pomozite nam da stvorimo bolju budućnost za sebe i buduće
              generacije.
            </FadeText>
          </div>
        </section>

        <section className="h-screen"></section>
      </main>
    </div>
  );
};

export default Homepage;
