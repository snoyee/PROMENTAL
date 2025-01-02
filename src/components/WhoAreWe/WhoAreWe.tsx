import "./WhoAreWe.css";
import WhoAreWeIMG from "../../assets/WhoAreWeIMG.svg";

const WhoAreWe = () => {
  return (
    <>
      <div className="WhoAreWeMain" id="WhoAreWe">
        <div className="WhoAreWeText">
          <h3>Mam na imię Sara, mam 20 lat.</h3>
          <p>
            Będąc nastolatką przez długi czas zmagałam się z różnymi problemami
            psychicznymi. Już w wieku 13 lat zdiagnozowano u mnie zaburzenia
            emocjonalne. Myśli o samobójstwie towarzyszyły mi codziennie przez
            kilka lat. Ciągły brak motywacji, brak siły do wykonania
            najprostszych czynności i przewlekły stres sprawiały, że z każdym
            dniem mój organizm pogrążał się w coraz gorszym stanie. Zaczęłam
            podejmować działania wręcz destukcyjne, które w tamtym momencie
            wydawały się dla mnie kojące. Nie miałam już żadnej nadziei, że może
            być lepiej, że kiedyś będę szczęśliwa. Dziś, mimo licznych problemów
            zdrowotnych, będących konsekwencją mojego stanu psychicznego sprzed
            kilku lat, potrafię docenić każdy dzień. Po ponad pięciu latach w
            końcu mogę z pełnym przekonaniem stwierdzić, że jestem osobą
            szczęśliwą. Przeszłam długą i trudną drogę, ale dzięki wsparciu
            wspaniałych ludzi wokół mnie na nowo cieszę się z życia i budzę się
            każdego dnia z chęcią do działania. Niestety, skutki dawnych
            problemów odczuwam do dziś. Przewlekły stan zapalny niemal całego
            układu pokarmowego codziennie powoduje u mnie uciążliwe
            dolegliwości, które utrudniają normalne funkcjonowanie. Co więcej,
            mój obecny stan zdrowia niesie wysokie ryzyko rozwoju nawet
            nowotworów. Mimo tego wierzę, że w końcu wyzdrowieję i wszystko się
            ułoży. Chciałabym, aby ludzie byli świadomi do czego może
            doprowadzić ignorowanie takich stanów i zwlekanie z leczniem chorób
            i zaburzeń psychicznych. Chciałabym aby każda osoba, która zmaga się
            z problemami psychicznymi mogła zaznać spokoju, bo wiem, jakie to
            jest okropne doświadczenie i jaki może mieć niekorzystny wpływ na
            jakość życia, a nawet jego utratę
          </p>
        </div>
        <div className="WhoAreWeImg">
          <img src={WhoAreWeIMG}></img>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
