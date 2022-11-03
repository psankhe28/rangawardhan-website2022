import { useContext } from "react";
import About from "./about/About.jsx";
import Intro from "./intro/Intro.jsx";
import Toggle from "./toggle/Toggle.jsx";
import { ThemeContext } from "../../context";
import Navbar from "../home/Navbar/Navbar.jsx";
import Footer1 from "../home/Footer/Footer1.js";

const Page2 = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
    <Navbar />
      <Toggle />
      <Intro />
      <About />
     <Footer1 />
    </div>
  );
};

export default Page2;
