import './Contact.css'
import OrderForm from '../OrderForm/OrderForm';

const Contact = () => {
    
    return(
        <>
            <div className='header-image'>
                <img width="1440" height="390" src="https://dammrattan.se/wp-content/uploads/2020/10/header.jpg"></img>
            </div>
            <div className='main-container'>
                <div className='main-container-element auto-margin'>
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
                <div className='main-container-element auto-margin'>
                    <img src='https://dammrattan.se/wp-content/uploads/elementor/thumbs/OM-OSS-BILD-scaled-p4l5ig8o8oxw2u2le6eriti37o5wzu37xua4jmw8so.jpg'></img>
                </div>
            </div>
            <div className='main-container contact'>
                <div className='main-container-element center'>
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
                <div className='main-container-element center'>
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
                <div className='main-container-element center'>
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
            <div className='main-container contact'>
                <div className='main-container-element center'>
                    <img src='https://dammrattan.se/wp-content/uploads/2021/03/Annakarin-Ivarsson1.jpg'></img>
                    <div>
                    <h4>Anna-Karin Friden</h4>
                    </div>
                    <div>
                        <p>VD, HR-ansvarig</p>
                        <p>annakarin.friden@dammrattan.se</p>
                    </div>
                </div>
                <div className='main-container-element center'>
                <img src='https://dammrattan.se/wp-content/uploads/2021/03/Sofia-Nilsson2.jpg'></img>
                <div>
                    <h4>Sofia Nilsson</h4>
                    </div>
                    <div>
                        <p>Verksamhetsledare</p>
                        <p>sofia.nilsson@dammrattan.se</p>
                    </div>
                </div>
            </div>
            <div className='main-container contact'>
                <div className='main-container-element center'>
                    <img src='https://dammrattan.se/wp-content/uploads/2021/03/850_9581.jpg'></img>
                    <div>
                    <h4>Åsa Bruun</h4>
                    </div>
                    <div>
                        <p>Coach</p>
                        <p>asa.bruun@dammrattan.se</p>
                    </div>
                </div>
                <div className='main-container-element center'>
                <img src='https://dammrattan.se/wp-content/uploads/2021/03/Ikinia-Fuente.jpg'></img>
                <div>
                    <h4>Ikinia Fuentes</h4>
                    </div>
                    <div>
                        <p>Coach</p>
                        <p>ikinia.fuentes@dammrattan.se</p>
                    </div>
                </div>
            </div>
            <div className='main-container contact'>
                <div className='main-container-element auto-margin'>
                    <p>
                    Ni hittar oss även på sociala
                    </p>
                    <p>
                    medier, följa gärna oss där!
                    </p>
                </div>
                <div className='main-container-element'>
                    <i class="fab fa-facebook-square"></i>
                    <div>
                        <h5>
                            Facebook
                        </h5>
                    </div>
                </div>
                <div className='main-container-element'>
                    <i class="fab fa-instagram"></i>
                    <div>
                        <h5>
                            Instagram
                        </h5>
                    </div>
                </div>
                <div className='main-container-element'>
                    <i class="fab fa-linkedin"></i>
                    <div>
                        <h5>
                            LinkedIn
                        </h5>
                    </div>
                </div>
            </div>
            <OrderForm descriptionTitle="Beställ städtjänst" formTitle="Boka nu"/>
        </>
    )  
}

export default Contact;