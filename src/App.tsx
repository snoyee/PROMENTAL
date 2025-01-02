import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import OurMission from "./components/OurMission/OurMission";
import { useEffect } from "react";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <WhoAreWe />
      <OurMission />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
