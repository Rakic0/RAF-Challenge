import { useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map() {
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });
  const [loading, setLoading] = useState(true);
  const [satelite, setSatelite] = useState(false);

  // Satelite
  const handleTileSkin = () => {
    setSatelite((prev) => !prev);
  };

  // Coords
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const handleSuccess = (pos) => {
    setCoords((prev) => ({
      ...prev,
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    }));
    setLoading(false);
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setLoading(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <MapContainer
            center={[coords.lat, coords.lng]}
            zoom={13}
            minZoom={5}
            maxZoom={18}
            scrollWheelZoom={true}
            zoomControl={false}
            style={{ width: "100%", height: "100%", zIndex: 10 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={
                satelite
                  ? "https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=IdEpcvdOPsmPBnp2lv0T"
                  : "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=IdEpcvdOPsmPBnp2lv0T"
              }
            />
          </MapContainer>

          <div
            className="w-16 h-16 absolute bottom-10 left-5 sm:left-10 lg:bottom-16 lg:left-16 z-20 rounded-lg border-white border-4 cursor-pointer"
            onClick={handleTileSkin}
          >
            <img
              src={
                !satelite
                  ? "https://cloud.maptiler.com/static/img/maps/hybrid.png?t=1663665773"
                  : "https://cloud.maptiler.com/static/img/maps/streets-v2.png?t=1663665773"
              }
            />
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Map;
