import './Main.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const backgrounds = [
    'https://dammrattan.se/wp-content/uploads/2020/10/header.jpg',
    'https://dammrattan.se/wp-content/uploads/2021/06/iStock-1180172387.jpg',
    'https://dammrattan.se/wp-content/uploads/2022/02/TB2_4503-lr-scaled.jpg'
  ];

const Main = () => {
    return(
        <>
    <Carousel>
      <Carousel.Item>
        <div className='slider background1'>
            <div className='slider-container'>
                <h1>Städhjälp ger tid över till annat</h1>
                <p>
                I mer än 20 år har vi som städfirma hjälpt företag och privatpersoner till en fräschare och mer hållbar vardag. Oavsett om det handlar om kontor, lager, industri, villa eller lägenhet så finns vi och våra medarbetare för att ge er tid över till annat. Vad kan vi hjälpa er med?
                </p>
                <a href='' className='link-button'>
                    Ren arbetsplats
                </a>
                <a href='' className='link-button'>
                    Rent hemma
                </a>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='slider background2'>
            <div className='slider-container'>
                <h1>Hållbarhetsrapport för 2024!</h1>
                <p>
                På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete en naturlig del av vår vardag och förra året tog vi ett stort kliv mot att också bli bättre på att berätta om de viktiga insatser vi gör, genom att lansera vår första hållbarhetsrapport.
                </p>
                <a href='/sustainability' className='link-button'>
                    Till hållbarhetsrapporten
                </a>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slider background3'>
            <div className='slider-container'>
                <h1>Supersmidig bokning</h1>
                <p>
                Vi har lanserat handplockade tjänster via BokaDirekt.se för att göra det enklare än någonsin för dig som kund att boka hemstäd, flyttstäd och fönsterputs. När du bokar via BokaDirekt.se så får du möjlighet till snabb och smidig service med några få klick. Testa redan idag!
                </p>
                <a className="link-button" href='/order'>
                Beställ städtjänster
                </a>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slider background4'>
            <div className='slider-container'>
                <h1>Skräddarsydda lösningar anpassade efter era behov</h1>
                <p>
                Vi vet att varje hem och varje verksamhet är unik och därför skräddarsyr och anpassar vi en lösning utifrån just era behov. Efter ett förutsättningslöst samtal kring era behov tar vi fram ett erbjudande utifrån vad vi kommit överens om och skapar en bekymmersfri tillvaro för er. 
                </p>
                <a className="link-button" href='/order'>
                Beställ städtjänster
                </a>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slider background5'>
            <div className='slider-container'>
                <h1>Vi söker fler kollegor!</h1>
                <p>
                Vill du jobba i en snabbväxande bransch där vi förenklar och förbättrar människors vardag och skapar rena och fräscha arbetsplatser? Då kan Dammråttan vara arbetsplatsen för dig! Vi erbjuder schyssta arbetsvillkor, är auktoriserade och har kollektivavtal.
                </p>
                <a className="link-button" href='/work'>
                Läs mer
                </a>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slider background6'>
            <div className='slider-container'>
                <h1>Ett brett tjänsteutbud </h1>
                <p>
                Vi erbjuder inte bara städ för arbetsplatser och privata hem utan även flyttstäd, byggstäd, trappstäd, fönsterputs med mera. Dessutom kan vi erbjuda vaktmästartjänster, fasadtvätt och takbehandling, terrass och altantvätt samt enklare trädgårdstjänster. Hur kan vi hjälpa er få tid över till annat?
                </p>
                <a className="link-button" href='/cleaning'>
                Se våra tjänster
                </a>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
        

            <div className='main-container'>
                <div className='main-container-element auto-margin'>
                    <h2>
                        Skräddarsydda städtjänster
                    </h2>
                    <div>
                        <p>När ni anlitar Dammråttan får ni alltid:</p>
                    </div>
                    <div>
                        <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">                    
                        <path d="M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z"></path>
                        </svg> Städning anpassad efter era behov
                        </h5>
                        <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">                    
                        <path d="M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z"></path>
                        </svg> Miljöcertifierad städning
                        </h5>
                        <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">                    
                        <path d="M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z"></path>
                        </svg> Ett auktoriserat och kollektivavtalsanslutet företag
                        </h5>
                    </div>
                    <div>
                        <a className='link' href=''>
                            Städtjänster för dig {'>'}
                        </a>
                    </div>
                </div>
                <div className='main-container-element'>
                <img width="510" height="488" src="https://dammrattan.se/wp-content/uploads/2021/03/framsida.png"/>
                </div>
            </div>

            <div className='main-container center'>
                <div className='main-container-element lateral-margin'>
                    <h4>
                        Nöjd-kund-garanti
                    </h4>
                    <p>
                        Vi strävar alltid efter att du som kund skall vara nöjd med vårt arbete – om du inte skulle vara det åtgärdar vi problemet så vår leverans stämmer med det vi kommit överens om - det är vår nöjd-kund-garanti.
                    </p>
                </div>
                <div className='main-container-element lateral-margin'>
                    <h4>
                        Hög kvalitet
                    </h4>
                    <p>
                        Vi städar på era villkor; Vill ni ha hjälp med att plocka ur diskmaskinen hemma eller att säkerställa att fruktfatet på kontoret är fräscht och frukosten är på plats så hjälper vi er med de önskemål ni har.
                    </p>
                </div>
                <div className='main-container-element lateral-margin'>
                    <h4>
                        Sekretess
                    </h4>
                    <p>
                        Vi värnar om dig som kund, därför jobbar samtliga av våra medarbetare under sekretess vid alla våra städuppdrag.
                    </p>
                </div>
            </div>

            <div className='main-container-photo'>
                <div className='main-container-element'>
                    <div>
                        <h2>
                            Städhjälp till fast månadskostnad via abonnemang
                        </h2>
                    </div>
                    <div>
                        <p>
                        Vår städhjälp ger dig en enklare vardag där vi skapar en ren och fräsch miljö för dig oavsett om du är ett företag eller en privatperson.
                        Genom ett abonnemang med städfirman Dammråttan kan du som företagare enkelt få den rena arbetsplats du önskar, oavsett vilka önskemål ni har. Vi hanterar alltifrån plock ur diskmaskiner till rena fönster, i ett första möte går vi igenom era önskemål och bygger upp vår överenskommelse utifrån detta. Vi levererar en helhet, skapad efter era behov.
                        Vill du komma hem till ett rent hem och få tid över till annat? Genom ett abonnemang med Dammråttan kan du ägna din tid åt annat än städning. I ett första samtal kommer vi överens om vilka städtjänster ni vill ha hjälp med, eller om det kanske handlar om att bädda rent eller plocka upp barnens leksaker. Vi skapar en enklare vardag för dig helt enkelt. Självklart inkluderar vi också fönsterputs, storstäd eller annat i vårt abonnemang om ni önskar det.
                        </p>
                    </div>
                    <div>
                        <a className='link' href=''>                  
                            Vi hjälper dig {'>'}
                        </a>
                    </div>
                </div>
                <img width="720" height="817" src='https://dammrattan.se/wp-content/uploads/2021/06/iStock-1180172387.jpg'></img>
            </div>
            
            <div className='main-container center'>
                <div className='auto-margin'>
                    <h3>Vår kunders omdömen</h3>
                    <div className='ratings-list'>
                        <div className='card-content lateral-margin'>
                            <h6>
                            Adina Mocanu, Privatkund via Bokadirekt
                            </h6>
                            <div className='rating-stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </div>
                            <h4>Jättesmidig bokning</h4>
                            <p>
                            ”Det var jättesmidigt och lätt att anlita Dammråttan via Bokadirekt, jag fick en bekräftelse via mejl och sedan hade vi kontakt om detaljer kring städningen och hur jag ville ha det. Jag blev jättenöjd med städningen och badrummet var verkligen helt perfekt. Jag kommer absolut att anlita Dammråttan igen!”
                            </p>
                        </div>
                        <div className='card-content lateral-margin'>
                            <h6>
                            Helena Engström, Utbildningskoordinator,
                            Nordiska Textilakademin
                            </h6>
                            <div className='rating-stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </div>
                            <h4>Alltid nystädat</h4>
                            <p>
                            ”Vi har anlitat Dammråttan sedan 2017 för bland annat kontors- och klassrumsstäd, samt att de en gång om året genomför storstädning och fönsterputs hos oss. Vi rekommenderar gärna Dammråttan och dess trevliga medarbetare då de är flexibla att arbeta med och levererar ett gott resultat med rena lokaler som följd.”
                            </p>
                        </div>
                        <div className='card-content lateral-margin'>
                            <h6>
                            Monica Almqvist,
                            Office Service & Quality, OCS 
                            </h6>
                            <div className='rating-stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </div>
                            <h4>Tid till kollegorna</h4>
                            <p>
                            ”Vi är jättenöjda med Dammråttans arbete, de är väldigt lyhörda och anpassar sig efter våra behov. Vi använder dem för kontors städ och fönsterputs. Jag kan varmt rekommendera Dammråttan och deras serviceorienterade medarbetare för ett rent och fräscht kontor.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-container-photo'>
                <img className='img-position-left' width="720" height="615" src='https://dammrattan.se/wp-content/uploads/2022/02/TB2_4503-lr-scaled.jpg)'></img>
                <div className='main-container-element'>
                    <h2>
                    Vi är Dammråttan 
                    </h2>
                    <div>
                    Dammråttan startade år 2000 av Åsa Bruun och Anna-Karin Fridén som båda fortfarande är aktiva i företaget. Idag, drygt 20 år senare, har Dammråttan utvecklats till ett serviceföretag med omkring 100 medarbetare som varje dag levererar sina städtjänster till företag och privatbostäder i Sjuhäradsområdet.
                    </div>
                    <br></br>
                    <div>
                    Sedan starten har Dammråttans ledord varit stolthet över yrket, glädje, serviceanda och professionalism vilket genomsyrar hela verksamheten, från kunddialog och tjänster till utveckling av våra medarbetare.
                    </div>
                    <br></br>
                    <div>
                    Vi är stolta över våra medarbetare och de är stolta över Dammråttan och våra kunder. Det är våra medarbetare som är Dammråttan och som gör ett förträffligt arbete hos våra kunder, varje dag, anpassat efter varje kunds unika behov och önskemål.
                    </div>
                    <div>
                        <a className='link' href=''>Lär känna oss {'>'}</a>
                    </div>
                </div>
            </div>

            <div class='main-container'>
                <div className="main-container-element card-content auto-margin">
                    <h5>
                        Vi lanserar hållbarhetsrapporten för 2024!
                    </h5>
                    <p>
                    På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete
                    </p>
                    <a href='' className="link">
                    Läs mer {'>'}  
                    </a>
                </div>
                <div className="main-container-element card-content auto-margin">
                    <h5>
                    Dammråttan förvärvar Ren känsla och stärker sin närvaro i Borås med omnejd
                    </h5>
                    <p>
                    På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete
                    </p>
                    <a href='' className="link">
                    Läs mer {'>'}  
                    </a>    
                </div>
            </div>
        </>
    )
}

export default Main;