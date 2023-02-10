import { useEffect, useState } from "react";
import Map from "../components/Map";
import MapModal from "../components/MapModal";

const WorldMap = () => {
  const [ecoData, setEcoData] = useState(null);

  useEffect(() => {
    document.title = "EcoSoft | Mapa";
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map setEcoData={setEcoData} />
      <MapModal ecoData={ecoData} setEcoData={setEcoData} />

      <div className="p-2 bg-white bg-opacity-25 absolute bottom-16 left-16 rounded-xl flex flex-col gap-2">
        {/* Forest */}
        <figure className="flex items-center w-full">
          <div className="w-6">
            <svg viewBox="-4 0 36 36">
              <path
                fill="#15803d"
                d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
              ></path>
              <circle fill="#d3d3d3" cx="14" cy="14" r="7"></circle>
            </svg>
          </div>

          <span className="text-[#d3d3d3]">- Vrste Šuma</span>
        </figure>

        {/* Swapms and wetland */}
        <figure className="flex items-center w-full">
          <div className="w-6">
            <svg viewBox="-4 0 36 36">
              <path
                fill="#14532d"
                d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
              ></path>
              <circle fill="#d3d3d3" cx="14" cy="14" r="7"></circle>
            </svg>
          </div>

          <span className="text-[#d3d3d3]">- Močvare</span>
        </figure>

        {/* Corlas */}
        <figure className="flex items-center w-full">
          <div className="w-6">
            <svg viewBox="-4 0 36 36">
              <path
                fill="#0ea5e9"
                d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
              ></path>
              <circle fill="#d3d3d3" cx="14" cy="14" r="7"></circle>
            </svg>
          </div>

          <span className="text-[#d3d3d3]">- Korali</span>
        </figure>

        {/* Oceans */}
        <figure className="flex items-center w-full">
          <div className="w-6">
            <svg viewBox="-4 0 36 36">
              <path
                fill="#1d4ed8"
                d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
              ></path>
              <circle fill="#d3d3d3" cx="14" cy="14" r="7"></circle>
            </svg>
          </div>

          <span className="text-[#d3d3d3]">- Okeani</span>
        </figure>

        {/* Tundras */}
        <figure className="flex items-center w-full">
          <div className="w-6">
            <svg viewBox="-4 0 36 36">
              <path
                fill="#bae6fd"
                d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
              ></path>
              <circle fill="#d3d3d3" cx="14" cy="14" r="7"></circle>
            </svg>
          </div>

          <span className="text-[#d3d3d3]">- Tundre</span>
        </figure>

        {/* Deserts */}
        <figure className="flex items-center w-full">
          <div className="w-6">
            <svg viewBox="-4 0 36 36">
              <path
                fill="#f48c35"
                d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
              ></path>
              <circle fill="#d3d3d3" cx="14" cy="14" r="7"></circle>
            </svg>
          </div>

          <span className="text-[#d3d3d3]">- Pustinje</span>
        </figure>
      </div>
    </div>
  );
};

export default WorldMap;
