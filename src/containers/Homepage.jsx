import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import classnames from "classnames";

// Componentrs
import {
  AnimatedHeading,
  FadeText,
  Heading,
  Paragraph,
} from "../components/Typo";
import Dots from "../components/Dots";
import Button from "../components/Button";
import Modal from "../components/Modal";

// IMGs
import Paper from "../assets/paper/paper_1.png";
import OtvorKanta from "../assets/kanta.png";

// Icons
import { RxDotFilled } from "react-icons/rx";
import { SlFire } from "react-icons/sl";
import { FaToilet } from "react-icons/fa";
import { GiGrassMushroom } from "react-icons/gi";
import { TfiTrash } from "react-icons/tfi";
import { CiBag1 } from "react-icons/ci";
import { BsArrowUpRightCircle, BsArrowDownRightCircle } from "react-icons/bs";
import RecycleBin from "../assets/recycle-bin.png";
import { useInView } from "react-intersection-observer";

const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Homepage = () => {
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})
  );
  const [modalData, setModalData] = useState({ open: false, id: 1 });
  const [defaultCanCord, setDefaultCanCord] = useState(0);
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
      const a = document
        .querySelector(".canCord")
        .getBoundingClientRect().bottom;
      setDefaultCanCord(a);
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      const canCord = document
        .querySelector(".canCord")
        .getBoundingClientRect().top;

      if (canCord <= 350) {
        document.querySelector(".sticky").classList.add("stickyCan");
      } else if (canCord > 400) {
        document.querySelector(".sticky").classList.remove("stickyCan");
      }

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * (viewportHeight / 4);
        return map;
      }, {});

      setVisibleImagesMap(newVisibleImagesMap);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef();
  const { ref: inViewRef, inView } = useInView();

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      console.log(ref.current);
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <div className="bg-[#fdd85f] overflow-hidden p-2">
      <header className="p-1 pt-16 min-h-[95vh] relative z-10">
        <div className="glow" />
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
          <div className="absolute w-[46vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="animate-spin-slow"
              aria-hidden="true"
            >
              <circle
                opacity=".2"
                cx="128"
                cy="128"
                r="127"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="0.1 10"
              ></circle>
            </svg>
          </div>

          <div className="absolute w-[76.3vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 372 374"
              className="animate-spin-backwards-slow"
              aria-hidden="true"
            >
              <circle
                opacity=".1"
                cx="185"
                cy="187"
                r="185"
                stroke="#000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="0.1 20"
              ></circle>
            </svg>
          </div>

          <Dots className="-bottom-44" />
        </div>

        <div className="sticky ml-4 isolate">
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

        <div className="w-1/2 md:w-1/3 xl:w-1/4 absolute right-4 bottom-4">
          <div className="flex items-center">
            <RxDotFilled className="text-2xl" />
            <hr className="bg-black text-black h-0.5 border-0 w-full -ml-2" />
          </div>
          <h3 className="text-sm sm:text-lg md:text-2xl font-bold ml-2">
            Ekosistemima nisu potrebni ljudi. Ljudima su potrebni ekosistemi
          </h3>
        </div>
      </header>

      <main className="lg:mt-24">
        {/* Intro */}
        <section className="relative">
          <div className="ui-fragments">
            <Dots className="bottom-24" />
          </div>

          <div className="min-h-screen flex items-center justify-center sm:w-[90%] sm:mx-auto">
            <FadeText className="px-2 text-center relative z-10 sm:text-3xl lg:text-4xl xl:text-6xl">
              Recikliranje je jednostavan i efikasan način da se smanji otpad,
              štede resursi i zaštiti okolina. Krenite sa recikliranjem danas i
              pomozite nam da stvorimo bolju budućnost za sebe i buduće
              generacije.
            </FadeText>
          </div>
        </section>

        <section className="h-screen bg-gradient relative">
          <div className="ui-fragments">
            <div className="absolute w-[46vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="animate-spin-slow"
                aria-hidden="true"
              >
                <circle
                  opacity=".2"
                  cx="128"
                  cy="128"
                  r="127"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0.1 10"
                ></circle>
              </svg>
            </div>

            <div className="absolute w-[76.3vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 372 374"
                className="animate-spin-backwards-slow"
                aria-hidden="true"
              >
                <circle
                  opacity=".1"
                  cx="185"
                  cy="187"
                  r="185"
                  stroke="#000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="0.1 20"
                ></circle>
              </svg>
            </div>

            <Dots />
          </div>

          <Modal data={modalData} setModalData={setModalData} />

          <AnimatedHeading h1="Kako" h2="recikliramo" />

          <div className="px-3 -mt-24 relative center z-20 w-full">
            <div className="w-fit absolute center !left-12 sm:!left-[17.5%] mt-0.5">
              <Button
                className="translate-x-8 lg:translate-x-12 mb-12 lg:mb-24"
                onClick={() =>
                  setModalData((prev) => ({ ...prev, open: true, id: 6 }))
                }
              >
                <img src={RecycleBin} className="w-9 sm:w-16" />
                {/* 6 */}
              </Button>
              <Button
                className="mb-12 lg:mb-24"
                onClick={() =>
                  setModalData((prev) => ({ ...prev, open: true, id: 4 }))
                }
              >
                <TfiTrash className="text-4xl sm:text-6xl" />
                {/* 4 */}
              </Button>
              <Button
                className="translate-x-8 lg:translate-x-12"
                onClick={() =>
                  setModalData((prev) => ({ ...prev, open: true, id: 5 }))
                }
              >
                <CiBag1 className="text-4xl sm:text-6xl" />
                {/* 5 */}
              </Button>
            </div>

            <div className="w-fit absolute top-1/2 -translate-x-1/2 -translate-y-1/2 right-0 sm:right-[8%] lg:right-[10%]">
              <Button
                className="-translate-x-8 lg:-translate-x-12 mb-12 lg:mb-24"
                onClick={() =>
                  setModalData((prev) => ({ ...prev, open: true, id: 1 }))
                }
              >
                <SlFire className="text-4xl sm:text-6xl" />
                {/* 1 */}
              </Button>
              <Button
                className="mb-12 lg:mb-24"
                onClick={() =>
                  setModalData((prev) => ({ ...prev, open: true, id: 2 }))
                }
              >
                <GiGrassMushroom className="text-4xl sm:text-6xl" />
                {/* 2 */}
              </Button>
              <Button
                className="-translate-x-8 lg:-translate-x-12"
                onClick={() =>
                  setModalData((prev) => ({ ...prev, open: true, id: 3 }))
                }
              >
                <FaToilet className="text-4xl sm:text-6xl" />
                {/* 3 */}
              </Button>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-secondary grid items-center">
          <AnimatedHeading h1="Zašto" h2="Reciklirati" />
          <div className="relative canCord mt-20 isolate">
            <img src={OtvorKanta} className="relative z-0" />
            <div className="absolute top-5 w-[93%] z-10 left-1/2 -translate-x-1/2">
              <svg
                class="svg-bg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1311 1492"
              >
                <path
                  opacity=".3"
                  d="M664.28 1443.8H461.92s-14.75-2.63-14.75 12.61c0 15.23-1.4 32.75-15.71 32.75-14.3 0-207.67 18-239.05-57.21 0 0-50.3-236.97-68.75-654.55l-21.3-453.28H93.5s-1.5-.46-1.5 4.54c0 2.84-.66 1.52-2.5 3.84-1.1 1.4.5 4.16-3.5 7.5-1.9 1.6-6.99 1.66-10.53 1.66-7.97 0-11.97 1-12.97-13C59.5 305.5 44.84 189.59 43 180c0 0-36.34-2.3-40.03-3.84C-.73 174.62 1 121.2 1 121.2s-.48-3.83 2.15-3.83 0-49.69 0-51.7c0 0 102.72-28.65 151.35-36.67.62-9.22 228.52 8.49 233.5 5.5 4.97-2.99 261 0 261 0s156.5 6 363.5 0c88.5 0 142.55-41.43 143.22-32.21 48.63 8.02 153.07 63.38 153.07 63.38 0 2.01-2.6 51.7 0 51.7 2.59 0 2.15 3.83 2.15 3.83s-.31 58.46-4 60c-3.69 1.54-34.94 2.3-34.94 2.3-1.84 9.59-16.82 130.56-18.53 144.66-1.71 14.1-7.2 14.1-15.17 14.1-9.83 0-12.83-4.33-12.83-11.6s-1.25-6.54-1.25-6.54c-6.75-.96-16.25-.96-16.25-.96l-19.63 454c-18.45 417.48-68.75 654.54-68.75 654.54-31.39 75.21-224.78 57.21-239.08 57.21-14.31 0-15.68-17.52-15.68-32.76 0-15.23-14.76-12.6-14.76-12.6l-185.79.25Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="mt-[30rem] w-[90%] sm:w-[70%] mx-auto"
            style={{
              transform: `translateY(${offset * -0.2}px)`,
            }}
          >
            <div>
              <Heading>
                <div className="flex gap-2 items-center">
                  <BsArrowUpRightCircle /> 17 %
                </div>
              </Heading>

              <Paragraph className="mt-2">
                Globalna stopa reciklaže čvrstog komunalnog otpada je 32%
              </Paragraph>
              <Paragraph className="mt-2">
                Procena uštede CO2 ako se koristi reciklirani papir umesto čiste
                celuloze procenjuje se na oko 2,5 do 5,2 miliona metričkih tona
                godišnje.
              </Paragraph>
            </div>

            <div className="w-full h-0.5 bg-white rounded-full my-6 relative before:content-[' '] before:block before:absolute before:w-3 before:h-3 before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-white"></div>

            <div>
              <Heading>
                <div className="flex gap-2 items-center">
                  <BsArrowDownRightCircle /> 1t 📃
                </div>
              </Heading>

              <Paragraph className="mt-2">
                Reciklaža jedne tone papira štedi 17 stabala, 7.000 galona vode
                i 2 barela nafte.
              </Paragraph>
              <Paragraph className="mt-2">
                Recikliranjem jedne aluminijumske limenke štedi se dovoljno
                energije da bi televizor mogao da radi tri sata.
              </Paragraph>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-secondary"></section>
      </main>
    </div>
  );
};

export default Homepage;
