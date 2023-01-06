import { createContext, useState } from "react";

const NavContext = createContext();

export function NavProvider({ children }) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <NavContext.Provider value={{ open, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
}

export default NavContext;
