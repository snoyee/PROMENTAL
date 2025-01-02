import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="ProjectsMain" id="Projects">
        <h1>PROJEKTY</h1>
        <div className="ProjectsText">
          <div id="ProjectsBoxFirst">
            <h3>
              Akcja <br />
              "przekaż powód do szczęścia"
            </h3>
            <p>
              akcja odbywa się w szkole - na przerwach między lekcjami.
              Uczniowie, nauczyciele jak i wszyscy pracownicy szkoły mogą
              napisać na małej karteczce ich powód do radości, jakakolwiek
              rzecz, czynność, słowa, które sprawiają uśmiech, motywują czy
              nawet są powodem do życia. Karteczki następnie rozwieszane są po
              całej szkole, na tablicach informacyjnych, parapetach, oknach,
              ścianach, aby każdy w ciągu dnia mógł przypomnieć sobie o nawet
              najmniejszej miłej rzeczy, która może sprawić radość.
            </p>
            <button>Zorganizuj akcję</button>
          </div>
          <div id="ProjectsBoxSecond">
            <h3>Kursy dla każdego ucznia</h3>
            <p>
              dwugodzinny wykład odbywający się w szkole, prowadzony przez
              specjalisów, o tym jak prosić o pomoc, gdzie zgłosić się w razie
              potrzeby, nauka o tym, że pomoc psychologiczna i psychiatryczna
              nie jest niczym złym. Nauka o tym, do czego mogą doprowadzić
              nieleczone choroby i zaburzenia psychiczne, jakie mogą być skutki
              ignorowania symptomów oraz na jakie objawy zwracać uwagę.
            </p>
            <button>Zamów kurs</button>
          </div>

          <div id="ProjectsBoxThird">
            <h3>
              Książka „Siła umysłu: Jak radzić sobie z wewnętrznymi
              trudnościami”
            </h3>
            <p>
              książka opracowana przez doświadczonych psychologów, o tym jak
              radzić sobie z emocjami, cena 39,99 zł - Cały dochód ze sprzedaży
              książki zostanie przeznaczony na wsparcie opieki psychicznej i
              psychiatrycznej dla dzieci i młodzieży w Polsce.
            </p>
            <button>Kup książkę</button>
          </div>
        </div>
        <div id="ProjectsBoxFourth">
          <h3>➳ Zniżki na konsultacje</h3>
          <p>
            otrzymaj zniżkę na konsultację w prywatnej klinice psychologiczno -
            psychiatrycznej Mental Expert w Bydgoszczy - więcej informacji w
            zakładce kontakt.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
