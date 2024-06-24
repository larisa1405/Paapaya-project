import "./NewsItem.css"

const NewsItem = () => {
    return(<>
        <div className="header-image">
            <img width="1440" height="390" src="	https://dammrattan.se/wp-content/uploads/2020/10/foretag_head.jpg"></img>
        </div>
        <div className="main-container extra-padding">
            <div className="main-container-element line-height">
                <div className="newsitem-header">
                    <p>
                        NYHET 12 juni, 2024
                    </p>
                    <p className="bold">DELA 
                        <a href="">
                            <i class="fab fa-facebook-square"></i> 
                        </a>
                        <a href="">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </p>
                </div>
                <h3>
                Vi lanserar hållbarhetsrapporten för 2024!
                </h3>
                <div className="bold">
                    <p>
                    På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete en naturlig del av vår vardag och förra året tog vi ett stort kliv mot att också bli bättre på att berätta om de viktiga insatser vi gör, genom att lansera vår första hållbarhetsrapport.
                    </p>
                </div>
                <div>
                    <p>
                    Sedan dess har vi fortsatt arbeta strategiskt och operativt mot att bli en mer hållbar verksamhet för varje dag som går. Hos oss är vi mycket väl medvetna om att våra medarbetare är vår absolut största tillgång. Inom den sociala hållbarheten fortsätter vi därför att vara med och bidra till positiv skillnad genom att vara en schysst arbetsgivare i alla aspekter. Hos oss är kollektivavtal för samtliga medarbetare en självklarhet och det är viktigt för oss att var en föregångare, engagera oss och bidra till att vår bransch blir ännu bättre för alla medarbetare.
                    </p>
                </div>
                <div>
                    <p>
                    I rapporten kan du ta del av fakta, omdömen (från både medarbetare och kunder), olika typer av mål och resultat samt vårt arbetssätt kopplat till hållbarhet.
                    </p>
                </div>
                <div>
                    <a className="link" href="https://dammrattan.se/wp-content/uploads/2024/06/Hallbarhetsrapport-2024.pdf">
                    Ta del av hela vår hållbarhetsrapport för 2024 genom att klicka här!
                    </a>
                </div>
                <div>
                <img width="300" src="https://dammrattan.se/wp-content/uploads/2024/06/Hallbarhetsrapport.-Till-webb.--300x216.png">
                </img>
                </div>
            </div>
        </div>
        <div className="main-container">
                <div className="news-list">
                <h3 className='center'>
                    Fler nyheter
                </h3>
                    <div className="news-item">
                        <img src="https://dammrattan.se/wp-content/uploads/2024/06/Hallbarhetsrapport.-Till-webb.--300x216.png"></img>
                        <div className='content'>
                            <h5>
                            Vi lanserar hållbarhetsrapporten för 2024!
                            </h5>
                            <p>
                            På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete
                            </p>
                            <a className='link' href="/news/newsItem">Läs mer {">"}</a>
                        </div>
                    </div>
                    <div className="news-item">
                        <img src="https://dammrattan.se/wp-content/uploads/2024/06/Hallbarhetsrapport.-Till-webb.--300x216.png"></img>
                        <div className='content'>
                            <h5>
                            Vi lanserar hållbarhetsrapporten för 2024!
                            </h5>
                            <p>
                            På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete
                            </p>
                            <a className='link' href="/news/newsItem">Läs mer {">"}</a>
                        </div>
                    </div>
                    <div className="news-item">
                        <img src="https://dammrattan.se/wp-content/uploads/2024/06/Hallbarhetsrapport.-Till-webb.--300x216.png"></img>
                        <div className='content'>
                            <h5>
                            Vi lanserar hållbarhetsrapporten för 2024!
                            </h5>
                            <p>
                            På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete
                            </p>
                            <a className='link' href="/news/newsItem">Läs mer {">"}</a>
                        </div>
                    </div>
                    <div className="news-item">
                        <img src="https://dammrattan.se/wp-content/uploads/2024/06/Hallbarhetsrapport.-Till-webb.--300x216.png"></img>
                        <div className='content'>
                            <h5>
                            Vi lanserar hållbarhetsrapporten för 2024!
                            </h5>
                            <p>
                            På Dammråttan har vi bestämt oss för att varje år bli lite bättre på att driva vår verksamhet ur ett hållbarhetsperspektiv. Sedan länge är hållbarhetsarbete
                            </p>
                            <a className='link' href="/news/newsItem">Läs mer {">"}</a>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}

export default NewsItem;