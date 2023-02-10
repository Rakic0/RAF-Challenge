import { RxCross2 } from "react-icons/rx";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";
import { Heading, Paragraph, SmallHeading } from "./Typo";
import ReactMarkdown from "react-markdown";
import "../markdownStyles.css";

const MapModal = ({ ecoData, setEcoData }) => {
  const handleDragStart = (e) => e.preventDefault();
  const [contentContainer, setContentContainer] = useState(0);

  useEffect(() => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    const px = (70 * vh) / 100 - 24 * 16;

    setContentContainer(px);
  }, []);

  return (
    <div
      className={`${
        ecoData
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      } absolute top-1/2 left-1/2 transofrm -translate-x-1/2 transition-all -translate-y-1/2 bg-white w-[90vw] sm:w-[70vw] md:w-[50vw] xl:w-[45vw] 2xl:w-[40vw] h-[70vh] rounded-lg z-40 overflow-hidden`}
    >
      <RxCross2
        className="text-3xl absolute right-3 top-3 cursor-pointer z-40"
        onClick={() => setEcoData(null)}
      />

      <div>
        <AliceCarousel
          autoPlay={true}
          disableDotsControls
          infinite
          disableButtonsControls
          autoPlayInterval={5000}
          mouseTracking
        >
          {ecoData?.img.map((item) => (
            <img
              src={`https://cdn.sanity.io/images/0g7ytf1u/production/${item.asset._ref.slice(
                6,
                -5
              )}.webp`}
              alt={item.title}
              key={item._key}
              onDragStart={handleDragStart}
              className="h-96 w-full mx-auto object-cover"
            />
          ))}
        </AliceCarousel>

        <div
          className="p-3 overflow-y-auto overflow-x-hidden"
          style={{ height: `${contentContainer}px` }}
        >
          <h3 className="text-gray-700 text-2xl mb-2 font-aileron-regular font-bold">
            {ecoData?.title}
          </h3>
          <ReactMarkdown children={ecoData?.description} />
        </div>
      </div>
    </div>
  );
};

export default MapModal;
