import './Footer.css'

const Footer = () => {
    
    return(
        <>
            <div className="footer">

                <div className="flex-footer"> 
                    <img src='https://dammrattan.se/wp-content/uploads/2020/10/Dammrattan_NY-1-300x90.png'></img>
                    <div>
                    <a className="link-button" href="/">Beställ städtjänster</a>
                    </div>
                </div>
                <div className="main-container-footer">
                    <div>
                        <p>
                        Idag finns vi på flera orter som Borås, Alingsås, Ulricehamn, Vårgårda, Herrljunga, Bollebygd  Kinna, Skene, Svenljunga, Tranemo, Falköping, Skövde, Skara och Vara med omnejd.
                        </p>
                        <p className= "p1">KONTAKT</p>
                        <a className='link-footer' href="/">info@dammrattan.se</a>
                        <br></br>
                        <a className='link-footer' href="/">010-264 34 00</a>
                    </div>
                    <div>
                        <p className="p1">ÖPPETTIDER</p>
                        <p>Mon – Fri 08:00-16:00</p>
                        <p className="p1">KONTORSADRESSER</p>
                        <p>Trandaredsgatan 200 J
                            <br></br> 507 52 Borås</p>
                        <p>Sturegatan 10A
                            <br></br>523 30 Ulricehamn</p>
                    </div>

                    <div className="menu-footer">
                        <p className="p1">MENY</p>
                        <a className='menu-link' href="/">Städtjänster</a>
                        <a className='menu-link' href="/">Om oss</a>
                        <a className='menu-link' href="/">Kontact</a>
                        <a className='menu-link' href="/">Jobba hos oss</a>
                        <a className='menu-link' href="/">Nyheter</a>
                    </div>

                    <div>
                        <p className="p1">FÖLJ OSS</p>
                        <a className="social" href="#"><i class="fab fa-facebook">Facebook</i></a>
                        <a className="social" href="#"><i class="fab fa-instagram">Instagram</i> </a>
                        <a className="social" href="#"><i class="fab fa-linkedin">LinkedIn</i></a>
                    </div>
                </div>
                 
            </div>
        </>
    )
}

export default Footer;