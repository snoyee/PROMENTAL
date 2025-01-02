import "./Main.css";
import HOMEImg from "../../assets/imgHome.svg";

const Main = () => {
  return (
    <>
      <div className="MainHome" id="Main">
        <div className="TextMainHome">
          <h3>BO TROSKA O UMYSŁ TO TROSKA O ŻYCIE</h3>
          <p>
            Według Światowej Organizacji Zdrowia, do 2030 roku depresja będzie
            najczęściej diagnozowaną przez lekarzy chorobą. Obecnie na świecie
            na depresję cierpi ok. 350 mln ludzi, w tym prawie 2 mln Polaków. Co
            więcej, depresja, jak i inne choroby psychiczne często prowadzą do
            samobójstwa, które w grupie wiekowej 15-29 lat jest czwartą z
            najczęstszych przyczyn zgonów na świecie. Co roku ponad 700 000 osób
            na świecie popełnia samobójstwo. <br />
            <br /> Musimy uświadomić wszystkim jak choroby i zaburzenia
            psychiczne są ogromnym problemem i dlaczego nie można ich
            lekceważyć.
          </p>
        </div>
        <div className="ImgMainHome">
          <img src={HOMEImg}></img>
        </div>
      </div>
    </>
  );
};

export default Main;
