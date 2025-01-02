import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="ContactMain" id="Contact">
        <div className="BoxTEXTDIV-Contact">
          <div className="BoxTextFirst-Contact">
            <h3>
              Jeżel zauważyłeś u siebie niepokojące objawy, lub czujesz, że
              potrzebujesz pomocy - nie zwlekaj. Oto co możesz zrobić:
            </h3>
          </div>
          <div className="BoxTextSecond-Contact">
            <ul style={{ listStyleType: "none", padding: "0px" }}>
              <li>
                <p>
                  - Skontaktuj się z nami - opisz swój problem a my postaramy
                  się znaleźć dla Ciebie rozwiązanie
                </p>
              </li>
              <li>
                <p>
                  - Zadzwoń na bezpłatny numer 800 119 119 lub napisz na czacie
                  zaufania na stronie www.800119119.pl
                </p>
              </li>
              <li>
                <p>
                  - Zadzwoń na telefon Zaufania dla Dzieci i Młodzieży - 116 111
                </p>
              </li>
              <li>
                <p>- Powiedz o swoim problemie bliskim, osobom, którym ufasz</p>
              </li>
              <li>
                <p>- Zgłoś się na konsultację z psychologiem</p>
              </li>
            </ul>
          </div>
          <div className="BoxTextThird-Contact">
            <p>
              Współpracujemy z kliniką psychiatryczno - psychologiczną Mental
              Expert w Bydgoszczy. Każda zainteresowana osoba może zgłosić się
              do nas po kod uprawniający do 60% zniżki na pierwszą konsultację -
              psychiatryczną, którą poprowadzi wybitny lekarz medycyny, Marcin
              Koprowski, lub psychologiczną, prowadzoną przez doświadczoną
              psycholog mgr Agnieszkę Tybus.
            </p>
          </div>
        </div>
        <div className="BoxTEXTDIV-Contact-Second">
          <h1>SKONTAKTUJ SIĘ Z NAMI</h1>
          <p>pomoc@promental.pl</p>
          <div className="IconsContact">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
