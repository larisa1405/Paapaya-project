import "./Order.css";
import OrderForm from "../OrderForm/OrderForm";

const Order = () => {
    return(
    <>
        <div className="order-header">
            <div>
                <h1>
                Beställ våra städtjänster
                </h1>
                <p>
                Vi erbjuder städtjänster för en enklare vardag oavsett om du är ett företag eller en privatperson. Boka direkt online via bokadirekt.se eller skicka in en offertförfrågan som vi anpassar efter din behov – valet är ditt. 
                </p>
            </div>
        </div>

        <div className="main-container-photo">
            <a href="https://www.bokadirekt.se/places/dammrattan-i-boras-43769">
            <img width="720" height="461" src="https://dammrattan.se/wp-content/uploads/2021/12/BokaDirekt3.png"></img>
            </a>
            <div className="main-container-element">
                <h2>
                    Boka online
                </h2>
                <div>
                    <p>
                    Vi vill underlätta för dig som kund till en bättre köpupplevelse online så nu kan du köpa handplockade tjänster på bokadirekt.se.  
                    </p>
                </div>
                <div>
                    <p>
                    När du bokar via bokadirekt.se så får du möjlighet till snabb och smidig service med några få klick. Klicka dig vidare till tjänsten Click’n Clean på knappen Boka Tid.
                    </p>
                </div>
                <div>
                    <a href="https://www.bokadirekt.se/places/dammrattan-i-boras-43769">
                    <img src="https://foretag.bokadirekt.se/bokatid/BokaTid_Gron_MorkBakgrund_120px.png"></img>
                    </a>
                </div>
            </div>
        </div>

        <OrderForm descriptionTitle="Offertförfrågan" formTitle="Fyll i formuläret" />
    </>)
}

export default Order;