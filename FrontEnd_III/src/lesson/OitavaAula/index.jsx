import './style.scss'
import { useState } from 'react'
import { SetimaAulaCardsProdutosComponentes } from '../../components/SetimaAulaCardsProdutosComponentes'


export function OitavaAula(){
    const [nomeProduto, setNomeProduto] = useState("")  
    const [priceProduto, setPriceProduto] = useState("")
    const [pictureProduto, setPictureProduto] = useState("")  
    const [formularioErro, setFormularioErro] = useState(false) 
    const [allProducts, setAllProducts] = useState([
       
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    
    ])
    const newProduct = {
        id: 4,
        name: nomeProduto,
        price: priceProduto,
        picture: pictureProduto
    }
     function cadastrarProduto(evento) {
        evento.preventDefault()
        
        
        if (nomeProduto === "" || priceProduto === "" || pictureProduto === ""){
            setFormularioErro(true)
        }else{
            setFormularioErro(false)
            setAllProducts([...allProducts, newProduct])
            setNomeProduto("")
            setPriceProduto("")
            setPictureProduto("")
        }
     } 
     

    return(
        
        <main className='oitava-aula'>
         
            
            <div className='tittle-wrapper'>
                <h1>Produtos</h1>
            </div>
            <form  onSubmit={event => cadastrarProduto(event)}>
                <div className={formularioErro ? 'form-error' : 'imputs'}  >
                    <div>
                        <label htmlFor="nomeProduto">Nome Produto</label>
                        <input id='nomeProduto' type="text" value={nomeProduto} onChange={event=> setNomeProduto(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="priceProduto">Preço Produto</label>
                        <input id='priceProduto' type="text" value={priceProduto} onChange={event=> setPriceProduto(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="pictureProduto">Imagem Produto</label>
                        <input id='pictureProduto' type="text" value={pictureProduto} onChange={event=> setPictureProduto(event.target.value)}/>
                    </div>
                    {
                formularioErro ? (
                    <span><strong>O seu formulário contem erros no preenchimento</strong></span>
                ) : null
            }
                </div>
                
                {/* <button type='submit' onClick={event => cadastrarProduto(event)}>Cadastrar Produto</button> */}
                <button type='submit'>Cadastrar Produto</button>

            </form>
           
            <section className='products'>
                {
                    allProducts.map(product => {
                        return( 
                        < SetimaAulaCardsProdutosComponentes
                        key={product.id}
                        productData ={product}
                        />)
                    })
                }
            </section>
        </main>
    )
}