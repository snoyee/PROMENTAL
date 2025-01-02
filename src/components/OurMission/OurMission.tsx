import "./OurMission.css";
import OurMissionIMG from "../../assets/OurMissionImg.svg";

const OurMission = () => {
  return (
    <>
      <div className="OurMissionMain" id="OurMission">
        <div className="OurMissionText">
          <div id="OurMissionTextFirst">
            <p>
              Naszym celem jest budowanie świadomości, że zdrowie psychiczne
              jest równie ważne jak zdrowie fizyczne. Chcemy podkreślić jak
              ważna jest troska o zdrowie emocjonalne, szczególnie wśród dzieci
              i młodzieży - według raportów problemy psychiczne coraz częściej
              dotyczą coraz młodszych osób.
            </p>
          </div>
          <div id="OurMissionTextSecond">
            <div style={{ display: "flex" }}>
              <h3>
                Zaburzenia psychiczne znacząco zwiększają ryzyko wystąpienia
                problemów zdrowia fizycznego
              </h3>
              <img src={OurMissionIMG} id="OurMissionTextSecondIMG"></img>
            </div>
            <p>
              Naukowcy z Uniwersytetu Bazylejskiego (Szwajcaria) i Uniwersytetu
              Ruhry w Bochum (Niemcy) przeanalizowali dane zdrowotne prawie 6,5
              tysiąca nastolatków w wieku od 13 do 18 lat pod kątem
              współwystępowania zaburzeń psychicznych i fizycznych. Wykazali, że
              zaburzenia psychiczne znacznie zwiększają ryzyko pojawienia się
              dolegliwości fizycznych, np. osoby cierpiące na zaburzenia
              afektywne, w tym depresję, często chorują później na zapalenie
              stawów lub doświadczają dolegliwości ze strony układu pokarmowego;
              tymczasem osoby z zaburzeniami lękowymi mogą obawiać się następstw
              zdrowotnych w postaci chorób skóry.
            </p>
          </div>

          <div id="OurMissionTextThird">
            <h3>Jakie objawy powinny niepokoić?</h3>
            <p>
              Ze względu na dużą złożoność schorzeń psychicznych, nie można
              wyróżnić jednej, wspólnej grupy objawów dla wszystkich zaburzeń,
              jednak należałoby zwrócić uwagę na takie zmiany w codziennym
              funkcjonowaniu, jak:
            </p>
            <p style={{ textAlign: "left", marginLeft: "1.8rem" }}>
              <br /> - zmiany snu lub apetytu <br />- zmiany nastroju, wycofanie
              się społeczne i utrata zainteresowań
              <br /> - spadek funkcjonowania w szkole, pracy lub w działaniach
              społecznych, zwiększona absencja, pogorszenie wyników <br />-
              problemy z myśleniem, koncentracją, pamięcią
              <br /> - zwiększona wrażliwość na widoki, dźwięki, zapachy lub
              dotyk, unikanie sytuacji nadmiernie stymulujących;
              <br /> - apatia, utrata inicjatywy lub chęci uczestniczenia w
              jakiejkolwiek działalności <br />- nerwowość, strach lub
              podejrzliwość wobec innych lub silne uczucie zdenerwowania zmiany
              zachowania
              <br /> – zachowanie dziwne, nietypowe, osobliwe
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
