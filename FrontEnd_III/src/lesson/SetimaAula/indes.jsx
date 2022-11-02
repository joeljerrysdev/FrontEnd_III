import './style.scss'
import {useState} from "react"
export function SetimaAula(){
    const [contador, setContador] = useState(0)
    const [temaEscuro, setTemaEscuro] = useState(false)
    const contaNumero = ()=>{
        setContador((prevContador)=>prevContador +1)
    }
    function mudarTema(){
        setTemaEscuro(!temaEscuro)
    }

        return(
            <main className={`setima-aula-component ${temaEscuro ? 'dark-theme':''}`}>
                <h1>Contador</h1>
                <button onClick={()=>mudarTema()}>Mudar tema</button>
                <button onClick={contaNumero}>Adicionar</button>
                <span>Numero atual é: {contador}</span>
            </main>
        )

    
}