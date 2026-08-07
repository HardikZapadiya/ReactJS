import { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h2 className="logo">MyApp</h2>
      <Nav2 />
    </nav>
  );
};

export default Navbar;
