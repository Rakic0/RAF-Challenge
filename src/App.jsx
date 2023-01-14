import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Homepage from "./containers/Homepage";
import WorldMap from "./containers/WorldMap";
import { NavProvider } from "./utils/NavContext";

export default function App() {
  return (
    <div className="relative rounded-md">
      <div className="app-border">
        <div className="left" />
        <div className="right" />
        <div className="top" />
        <div className="bottom" />
      </div>
      <NavProvider>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route path="/world-map" element={<WorldMap />} />
        </Routes>
      </NavProvider>
    </div>
  );
}
