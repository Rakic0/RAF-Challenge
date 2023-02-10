import { useEffect, useState } from "react";
import axios from "axios";
import Globe from "react-globe.gl";

function Map({ setEcoData }) {
  const markerSvg = `<svg viewBox="-4 0 36 36"><path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path><circle fill="#d3d3d3" cx="14" cy="14" r="7"></circle></svg>`;
  const [data, setData] = useState([]);

  useEffect(() => {
    let QUERY = encodeURIComponent('*[_type == "data"]');
    const URL = `${import.meta.env.VITE_API_URL}?query=${QUERY}`;

    axios.get(URL).then(({ data }) => setData(data));
  }, []);

  return (
    <div>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        htmlElementsData={data?.result}
        htmlElement={(item) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = item.color;
          el.style.width = `25px`;

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => setEcoData(item);
          return el;
        }}
      />
    </div>
  );
}

export default Map;
