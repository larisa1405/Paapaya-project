import './Navbar.css'


const Navbar = () => {


    return(
        <>
            <div className ="navbar">
                <a href='/' className = "logo">
                    DAMMRÅTTAN
                </a>
                <div className='flex'>
                        <a className='link' href="/cleaning">Städtjänster</a>
                        <a className="link" href="/aboutus">Om oss</a>
                        <a className="link" href="/contact">Kontakt</a>
                        <a className="link" href="/sustainability">Hållbarhet</a>
                        <a className="link" href="/work">Jobba hos oss</a>
                        <a className="link" href="/news">Nyheter</a>
                        <a className="link-button" href="/order">Beställ</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;