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
    </div>
  );
};

export default WorldMap;
