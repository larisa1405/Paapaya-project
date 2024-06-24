import './OrderForm.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const OrderForm = (title) => {
    const [services, setServices] = useState(["Hemstädning", 
        "Företagsstädning", 
        "Flyttstädning", 
        "Fönsterputsning",
        "Golvvård",
        "Trappstädning",
        "Byggstädning",
        "Desinficering",
        "Laminering"]);

    const{
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const createOrder = (data) => {
        console.log(data)
    }
    
    return(
        <>
        <div className='form-main-container'>
            <div className='main-container-element'>
                <h2>
                    {title.descriptionTitle}
                </h2>
                <div>
                    <p>
                    Vi erbjuder städtjänster som ger dig en enklare vardag där vi skapar en ren och fräsch miljö för dig oavsett om du är ett företag eller en privatperson. Vi skräddarsyr en lösning anpassad efter just era behov.
                    </p>
                </div>
                <div>
                    <h5>
                        Vad ingår?
                    </h5>
                    <ul>
                        <li>
                        Ett abonnemang
                        </li>
                        <li>
                        Städning enligt era önskemål
                        </li>
                        <li>
                        Miljöcertifierade produkter
                        </li>
                    </ul>
                </div>
            </div>
            <div className='main-container-element form'>
                <h2>
                    {title.formTitle}
                </h2>
                <form onSubmit={handleSubmit(createOrder)}>
                    <div>
                        <label>
                            <h5>       
                            Namn
                            </h5>
                            <input type="text" placeholder='Namn' {...register("name", {required: true})} required/>
                        </label>
                        <label>
                            <h5>
                            E-post
                            </h5>   
                            <input type="email" placeholder='E-post' {...register("email", {required: true})} required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <h5>
                            Mobilnummer
                            </h5>
                            <input type="text" placeholder='Mobilnummer' {...register("phoneNumber", {required: true})} required/>
                        </label>
                            <label>
                            <h5>
                            Adress
                            </h5>
                            <input type="text" placeholder='Adress' {...register("adress", {required: true})} required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <h5>
                            Stad
                            </h5>
                            <input type="text" placeholder='Stad' {...register("city", {required: true})} required/>
                        </label>
                        <label>
                            <h5>
                            Hur stort bor du?
                            </h5>
                            <input type="text" placeholder='Hur stort bor du?' {...register("area", {required: true})} required/>        
                        </label>
                    </div>
                    <div className='checkbox'>
                        <h5>
                        Vilka städtjänster önskas?
                        </h5>
                        {services.map((item)=> {
                            return(
                                <>
                                <div>
                                    <input value={item} id={item} type='checkbox' {...register("services")} />
                                    <label for={item}>{item}</label>
                                </div>
                                </>
                            )
                        })}
                    </div>
                        <h5>
                        Meddelande
                        </h5>
                        <textarea rows="4" type="text" placeholder='Meddelande' {...register("Name", {required: false})}/>
                    <div>
                        <input id="policy" type="checkbox" />
                        <label for="policy">
                        Jag samtycker till att Dammråttan behandlar mina personuppgifter i enlighet med deras integritetspolicy
                        </label>
                    </div>
                    <div>
                        <button className='link-button'>
                            SKICKA BESTÄLLNING
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )  
}

export default OrderForm;