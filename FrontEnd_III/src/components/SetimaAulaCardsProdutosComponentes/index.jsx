
export function SetimaAulaCardsProdutosComponentes(props){ 
    return(
        <div className="setima-aula-card-produto-component">
            <img src={props.productData.picture}/>
            <div className="card-body">
                <h1>{props.productData.name}</h1>
                <span>{props.productData.price},00</span>
            </div>
            
        </div>
        
    )
    
}