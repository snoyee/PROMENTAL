import "./Navbar.css";
import LOGO from "../../assets/PM.svg";

function Navbar() {
  return (
    <>
      <div className="MainNavbar">
        <div className="Logo">
          <img src={LOGO} onClick={() => window.location.reload()}></img>
        </div>
        <div className="links">
          <a href="#Main" id="HomeB">
            Strona Główna
          </a>
          <a href="#WhoAreWe" id="WhoAreWeB">
            Kim jesteśmy
          </a>
          <a href="#OurMission" id="OurMissionB">
            Nasza misja
          </a>
          <a href="#Projects" id="ProjectsB">
            Projekty
          </a>
          <a href="#Contact">Kontakt</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
