import { useContext } from "react";

// Context
import NavContext from "../utils/NavContext";

// IMGs
import Logo from "../assets/logo.png";

const Nav = () => {
  const { open, toggleNav } = useContext(NavContext);

  return (
    <nav className="flex items-center justify-between fixed top-2 left-1/2 -translate-x-1/2 mt-2 w-[90%] z-50 ">
      <img src={Logo} alt="Recycle logo" className="w-12" />

      <div
        className="w-12 h-12 bg-white rounded-full cursor-pointer flex items-center justify-center menu"
        onClick={() => toggleNav()}
      >
        <span className={`line ${open && "open"}`}></span>
      </div>
    </nav>
  );
};

export default Nav;
