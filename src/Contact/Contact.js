import './Contact.css'

const Contact = () => {
    
    return(
        <>
            <div className='header-image'>
                <img width="1440" height="390" src="https://dammrattan.se/wp-content/uploads/2020/10/header.jpg"></img>
            </div>
            <div className='container'>
                <div className='container-element auto-margin'>
                    <h2>
                        Kontakta oss
                    </h2>
                    <div>
                        <p>
                        Vi på Dammråttan finns till för att ge dig en ren och fräsch arbetsplats eller en enklare vardag. På Dammråttan hjälper vi företag och privatpersoner med allt från fönsterputs och storstädning till vanlig veckostädning eller enklare trädgårdsarbete. Läs mer om vår tjänster här.
                        </p>
                    </div>
                    <div>
                        <p>
                        Vill du komma i kontakt med oss så är du varmt välkommen att kontakta oss via formuläret eller via kontaktinformationen nedan. 
                        </p>
                    </div>
                </div>
                <div className='container-element auto-margin'>
                    <img src='https://dammrattan.se/wp-content/uploads/elementor/thumbs/OM-OSS-BILD-scaled-p4l5ig8o8oxw2u2le6eriti37o5wzu37xua4jmw8so.jpg'></img>
                </div>
            </div>
            <div className='container contact'>
                <div className='container-element center'>
                    <i class="fas fa-phone"></i>
                    <div>
                        <h5>
                        Telefon
                        </h5>
                    </div>
                    <div>
                        Växel: 010-264 34 00
                    </div>
                </div>
                <div className='container-element center'>
                    <i class="far fa-envelope-open"></i>
                    <div>
                        <h5>
                        Mejl
                        </h5>
                    </div>
                    <div>
                    <p>
                    info@dammrattan.se
                    </p>
                    <p>
                    ekonomi@dammrattan.se
                    </p>
                    </div>
                </div>
                <div className='container-element center'>
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                    <h5>
                    Adress
                    </h5>
                    </div>
                    <div>
                        <p>
                        Trandaredsgatan 200 J, 507 52 Borås
                        </p>
                        <p>
                        Sturegatan 10A, 523 30 Ulricehamn
                        </p>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default Contact;