import "../Cleaning.css"
import "./CleaningItem.css"

const CleaningItem = () => {
    return(
    <>
        <div className="header-image">
            <img width="1440px" height="390px" src="https://dammrattan.se/wp-content/uploads/2022/01/hemstad_v1-scaled.jpg"></img>
        </div>

        <div className="main-container">
            <div className="main-container-element">
                <h2>
                Hemstädning
                </h2>
                <div>
                    <p>
                    Visst är det skönt att kunna lägga din tid på annat än att städa hemmet. Låt oss ge dig tid över till annat och en enklare vardag. Genom ett enkelt abonnemang på hemstädning tar vi hand om ditt hem.
                    </p>
                </div>
                <div>
                    <p>
                    Ett nystädat och skinande rent hem är förmodligen något som alla vill komma hem till. Problemet är att städning i hemmet upplevs av många som tråkigt, långdraget och tidskrävande, men också som ett nödvändigt ont. Varför inte låta oss med våra städtjänster ta hand om hemstädningen och ge er tid över till annat oavsett om det är tid med familjen, träningen eller bara en god bok.
                    </p>
                </div>
                <div>
                    <p>
                    Vi har mer än 20 års erfarenhet av hemstädning och vi vet att varje hem är unikt, därför anpassar vi alltid vår städning efter ert hem och era behov. Kanske är ni en småbarnsfamilj som inte vill något hellre än att ha hjälp med att plocka ordning på leksaker och kläder, eller är du kanske på resande fot under veckorna och vill komma hem till ett rent hem med nyvattnade blommor. Oavsett vilka behov som ni har är vår ambition att möta era önskemål.
                    </p>
                </div>
                <div>
                    <p>
                    Efter ett första samtal tar vi fram ett förslag till städabonnemang som innehåller de städtjänster vi kommit överens om, och som löper vidare tills vi kommer överens om något annat.
                    </p>
                </div>
            </div>
            <div className="main-container-element extra-margin">
                <div className="contact-box">
                    <img src="https://dammrattan.se/wp-content/uploads/2020/10/foretag_head-768x513.jpg">
                    </img>
                    <div>
                        <h4>
                            Vill du ha personlig hjälp?
                        </h4>
                        <p>
                            Kontakta oss så ordnar vi allt
                        </p>
                    </div>
                    <div>
                        <a className="link" href="">010-264 34 00</a>
                        <a className="link" href="">Maila oss</a>
                    </div>
                </div>
                <a href="/order" className="link-button auto-margin">
                    Beställ städtjänster
                </a>
            </div>

        </div>     
        <div className="main-container center grey">
            <div className="auto-margin">
                <h2 >
                Så här skräddarsyr vi ett erbjudande
                </h2>
                <div className="offer-list">
                    <div className="center">
                        <img width="58" height="44" src="https://dammrattan.se/wp-content/uploads/2020/10/1b.png" />
                        <h4>
                            Behov
                        </h4>
                        <p>
                        I ett förutsättningslöst samtal eller
                        möte går vi igenom era behov
                        och vi kompletterar med
                        förslag utifrån vår erfarenhet och expertis
                        </p>
                    </div>
                    <div className="center">
                        <img width="58" height="44" src="https://dammrattan.se/wp-content/uploads/2020/10/2.png" />
                        <h4>
                            Behov
                        </h4>
                        <p>
                        I ett förutsättningslöst samtal eller
                        möte går vi igenom era behov
                        och vi kompletterar med
                        förslag utifrån vår erfarenhet och expertis
                        </p>
                    </div>
                    <div className="center">
                        <img width="58" height="44" src="https://dammrattan.se/wp-content/uploads/2020/10/3.png" />
                        <h4>
                            Behov
                        </h4>
                        <p>
                        I ett förutsättningslöst samtal eller
                        möte går vi igenom era behov
                        och vi kompletterar med
                        förslag utifrån vår erfarenhet och expertis
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div className="main-container">
            <div className="main-container-element">
                <h2>
                RUT-avdrag för Dammråttans tjänster
                </h2>
                <div>
                    <p>
                    Som privatkund till Dammråttan så har du möjlighet att nyttja RUT och ROT-avdrag för våra tjänster. Att använda RUT-avdraget är enkelt och innebär att du betalar 50% av arbetskostnaden. I våra kostnadsförslag och fakturor till dig som privatperson är priset alltid efter RUT-avdrag (och om du nyttjat hela ditt RUT-avdrag så meddela oss bara så får du en faktura utan RUT-avdrag). Använder du ROT på de tjänster som vi erbjuder med den möjligheten är det istället 30% i avdrag på arbetskostnaden.
                    </p>
                </div>
                <div>
                    <p>
                    Riksdagen har beslutat att taket för rotavdrag höjs från och med 1 juli 2024, till 75 000kr per år. Avdragen separeras också så du kan få 75 000 kr i både rot- och rutavdrag om du har tillräckligt mycket skatt att räkna av reduktionen mot, totalt 150 000kr. Höjningen gäller hela året ut.
                    </p>
                </div>
                <div>
                    <a className="link" href="https://www.skatteverket.se/privat/skatter/fastigheterbostad/husarbeterot.4.2e56d4ba1202f95012080002966.html">     
                        Läs mer om RUT-avdrag på Skatteverkets hemsida {">"}
                    </a>
                </div>
            </div>
        </div>
    </>)    
}

export default CleaningItem;