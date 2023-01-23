import { useEffect } from "react";
import Map from "../components/Map";

const WorldMap = () => {
  useEffect(() => {
    document.title = "EcoSoft | Mapa";
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map />
    </div>
  );
};

export default WorldMap;
