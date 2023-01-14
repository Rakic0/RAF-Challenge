import { useContext } from "react";
import { ReactComponent as Planet } from "../assets/planet.svg";
import { Link } from "react-router-dom";

// Context
import NavContext from "../utils/NavContext";

// IMGs
import Logo from "../assets/logo.png";
import { SmallHeading } from "./Typo";

const Nav = () => {
  const { open, toggleNav } = useContext(NavContext);

  return (
    <>
      <nav className="mt-2 sm:mt-6 xl:mt-10 2xl:mt-12 flex items-center justify-between fixed top-2 left-1/2 -translate-x-1/2 w-[90%] z-50">
        <img src={Logo} alt="Recycle logo" className="w-12 md:w-16" />

        <div
          className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full cursor-pointer flex items-center justify-center menu isolate z-50 relative"
          onClick={() => toggleNav()}
        >
          <span className={`line ${open && "open"}`}></span>
        </div>
      </nav>

      <div
        className={`${
          open ? "pointer-events-auto" : "pointer-events-none"
        } flex items-start h-screen w-full fixed z-40 nav-menu`}
      >
        <div
          className={`bg-secondary ${
            open ? "scale-y-100" : "scale-y-0"
          } origin-top flex-col h-full nav-menu w-[30%] hidden lg:flex`}
        ></div>

        <div
          className={`bg-primary ${
            open ? "scale-y-100" : "scale-y-0"
          } origin-bottom w-full h-full nav-menu flex flex-col items-center justify-center xl:items-start xl:pl-12`}
        >
          <SmallHeading className="text-amber-600 text-opacity-50 mb-12">
            Sekcije
          </SmallHeading>

          <ul className="nav-container">
            <li className={`${open && "slideIn"}`}>
              <a
                href="#"
                className="flex items-center gap-4 text-amber-700 text-opacity-50 font-bold text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl cursor-pointer hover:translate-x-2 mb-8 transition-all duration-300 nav-link"
              >
                <div className="border text-xl flex items-center justify-center border-amber-700 border-opacity-50 text-amber-700 text-opacity-50  rounded-full w-6 h-6 sm:w-8 sm:h-8 ">
                  1
                </div>{" "}
                Uvod
              </a>
            </li>

            <li
              className={`${open && "slideIn"}`}
              style={{
                animationDelay: "0.7s",
              }}
            >
              <a
                href="#"
                className="flex items-center gap-4 text-amber-700 text-opacity-50 font-bold text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl cursor-pointer hover:translate-x-2 mb-8 transition-all duration-300 nav-link"
              >
                <div className="border text-xl flex items-center justify-center border-amber-700 border-opacity-50 text-amber-700 text-opacity-50  rounded-full w-6 h-6 sm:w-8 sm:h-8">
                  2
                </div>{" "}
                <span className="whitespace-nowrap">Kako reciklirati</span>
                <span className="hidden">Pravilan način recikliranja</span>
              </a>
            </li>

            <li
              className={`${open && "slideIn"}`}
              style={{
                animationDelay: "0.9s",
              }}
            >
              <a
                href="#"
                className="flex items-center gap-4 text-amber-700 text-opacity-50 font-bold text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl cursor-pointer hover:translate-x-2 mb-8 transition-all duration-300 nav-link"
              >
                <div className="border text-xl flex items-center justify-center border-amber-700 border-opacity-50 text-amber-700 text-opacity-50  rounded-full w-6 h-6 sm:w-8 sm:h-8">
                  3
                </div>{" "}
                Statistika
              </a>
            </li>

            <li
              className={`${open && "slideIn"}`}
              style={{
                animationDelay: "1.1s",
              }}
            >
              <a
                href="#"
                className="flex items-center gap-4 text-amber-700 text-opacity-50 font-bold text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl cursor-pointer hover:translate-x-2 mb-8 transition-all duration-300 nav-link"
              >
                <div className="border text-xl flex items-center justify-center border-amber-700 border-opacity-50 text-amber-700 text-opacity-50  rounded-full w-6 h-6 sm:w-8 sm:h-8">
                  4
                </div>{" "}
                Šta se reciklira
              </a>
            </li>
            <li
              className={`${open && "slideIn"}`}
              style={{
                animationDelay: "1.3s",
              }}
            >
              <a
                href="#"
                className="flex items-center gap-4 text-amber-700 text-opacity-50 font-bold text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl cursor-pointer hover:translate-x-2 mb-8 transition-all duration-300 nav-link"
              >
                <div className="border text-xl flex items-center justify-center border-amber-700 border-opacity-50 text-amber-700 text-opacity-50  rounded-full w-6 h-6 sm:w-8 sm:h-8">
                  5
                </div>{" "}
                Zašto reciklirati
              </a>
            </li>
          </ul>

          <div className="w-32 h-32 cursor-pointer planet mx-auto mt-20 lg:hidden">
            <Link to="/world-map">
              <Planet />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
