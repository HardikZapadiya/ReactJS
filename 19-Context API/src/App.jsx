import { useContext } from "react";
import { ThemeDataContext } from "./context/ThemeContext";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme] = useContext(ThemeDataContext);

  return (
    <div className={theme}>
      <Navbar />
      <Button />
    </div>
  );
};

export default App;
