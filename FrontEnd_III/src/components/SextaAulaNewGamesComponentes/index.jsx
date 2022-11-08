export function SextaAulaNewGamesComponentes(props){
    return(
        <section>
            <div className="new-games-card">
                <img src={props.gameList.picture}/>
                <h1>{props.gameList.name}</h1>
                <p>{props.gameList.categories}</p>
                <p>{props.gameList.price}</p>
            </div>
        </section>
    )
}