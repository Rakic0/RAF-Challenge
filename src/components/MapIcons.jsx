import L from "leaflet";
import Marker from "../assets/marker.svg";
import MyLocation from "../assets/myLocation.svg";

export const RecyclingCenterIcon = L.icon({
  iconUrl: Marker,

  iconSize: [28, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

export const MyLocationIcon = L.icon({
  iconUrl: MyLocation,

  iconSize: [40, 100],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});
