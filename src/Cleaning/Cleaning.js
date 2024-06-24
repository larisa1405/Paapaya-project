import "./Cleaning.css";

const Cleaning = () => {
    return(
        <>
        <div className="cleaning-header">
            <div className="cleaning-main-container">
                <div>
                    <h1>
                    Städtjänster på
                    dina villkor
                    </h1>
                    <p>
                    Vi erbjuder städtjänster som ger dig en enklare vardag där vi skapar en ren och fräsch miljö för dig oavsett om du är ett företag eller en privatperson. Vi skräddarsyr en lösning anpassad efter just era behov.
                    </p>
                    <a className="link-button" href="/order">
                         Beställ städtjänster
                    </a>
                </div>
                <div>
                    <h3>
                    Vad ingår
                    </h3>
                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">                    
                        <path d="M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z"></path>
                        </svg> 
                        Ett abonnemang
                    </h4>
                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">                    
                        <path d="M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z"></path>
                        </svg> 
                        Städning enligt era önskemål
                    </h4>
                    <h4>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">                    
                        <path d="M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z"></path>
                        </svg> 
                        Miljöcertifierade produkter
                    </h4>
                </div>
            </div>
        </div>

        <div className="main-container">
            <div className="cleaning-list">
                <h2 className="center">Spana in våra städtjänster</h2>
                <a href="cleaning/home-cleaning">
                    <div className="cleaning-item auto-margin">
                        <div className="item-overlay">
                            <h4>
                                Hemstädning
                            </h4>
                            <div className="hover">
                                <p>
                                Låt oss ge dig tid över till annat och en enklare vardag. Vi tar vi hand om ditt hem.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="cleaning/home-cleaning">
                    <div className="cleaning-item auto-margin">
                        <div className="item-overlay">
                            <h4>
                                Hemstädning
                            </h4>
                            <div className="hover">
                                <p>
                                Låt oss ge dig tid över till annat och en enklare vardag. Vi tar vi hand om ditt hem.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="cleaning/home-cleaning">
                    <div className="cleaning-item auto-margin">
                        <div className="item-overlay">
                            <h4>
                                Hemstädning
                            </h4>
                            <div className="hover">
                                <p>
                                Låt oss ge dig tid över till annat och en enklare vardag. Vi tar vi hand om ditt hem.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="cleaning/home-cleaning">
                    <div className="cleaning-item auto-margin">
                        <div className="item-overlay">
                            <h4>
                                Hemstädning
                            </h4>
                            <div className="hover">
                                <p>
                                Låt oss ge dig tid över till annat och en enklare vardag. Vi tar vi hand om ditt hem.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <p className="center">
                Vår städhjälp ger dig en enklare vardag där vi skapar en ren och fräsch miljö för dig oavsett om du är ett företag eller en privatperson.
                </p>
                <a className="link-button auto-margin" href="/order">
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

        <div className="main-container-photo">
            <div className="main-container-element">
                <h2>Ren arbetsplats</h2>
                <div>
                    <p>
                    Vi erbjuder företagsstädning för ett rent och fräscht kontor där ni kan fokusera på er kärnverksamhet. I ett första besök går vi igenom era behov och skräddarsyr därefter en lösning med städtjänster anpassad just för er verksamhet.
                    </p>
                </div>
                <div>
                    <p>
                    De bästa idéerna skapas i en fräsch och trevlig arbetsmiljö där medarbetare och besökare trivs och utvecklas. Dammråttan finns till för att hjälpa er att skapa den arbetsplats som ni önskar, och vi hjälper till att lösa de behov som ni har, vanliga som mer ovanliga. Utifrån ett första förutsättningslöst möte där vi går igenom era lokaler så skräddarsyr vi sedan en städtjänst som passar just era behov. Oavsett om det bara handlar om mer traditionell företagsstädning, eller om ni vill ha hjälp med vattning av växter, påfyllning av kopieringspapper m.m. Vi finns här för att ni skall kunna fokusera på er verksamhet.
                    </p>
                </div>
                <div>
                    <a className="link" href="">                      
                        Kom igång {">"}
                    </a>
                </div>
            </div>
            <div className="image1">
                <img src="https://dammrattan.se/wp-content/uploads/2020/10/harmony.jpg"></img>
            </div>
        </div>

        <div className="main-container-photo">
            <div className="image2">
                <img src="https://dammrattan.se/wp-content/uploads/2021/03/iStock-1153595542-3.jpg"></img>
            </div>
            <div className="main-container-element">
                <h2>Rent hemma</h2>
                <div>
                    <p>
                    Visst är det skönt att kunna lägga din tid på annat än att städa hemmet. Låt oss ge dig tid över till annat och en enklare vardag. Genom ett enkelt abonnemang tar vi hand om ditt hem.
                    </p>
                </div>
                <div>
                    <p>
                    Ett nystädat och skinande rent hem är förmodligen något som alla vill komma hem till. Problemet är att städning i hemmet upplevs av många som tråkigt, långdraget och tidskrävande, men också som ett nödvändigt ont. Varför inte låta oss med våra städtjänster ta hand om hemstädningen och ge er tid över till annat oavsett om det är tid med familjen, träningen eller bara en god bok.
                    </p>
                </div>
                <div>
                    <a className="link" href="">                      
                        Kom igång {">"}
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cleaning;