
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import './style.scss'
import { useState } from 'react'
import { Card } from './Card'

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeFilme, setNomeFilme] = useState("")  
  const [imagemFilme, setImagemFilme] = useState("")  
  const [formularioErro, setFormularioErro] = useState(false) 
  const [allFilmes, setAllFilmes] = useState([
    {
      id:1,
      titulo: 'Harry Potter e o enigma do principe',
      imagem: 'https://hbomax-images.warnermediacdn.com/images/GXssQ0A7HLFVGwwEAAABc/tileburnedin?size=1280x720&partner=hbomaxcom&v=ff5b526c4c9d624db2b6f3380884be8e&host=art-gallery.api.hbo.com&language=pt-br&w=1280'
    },
    {
      id:2,
      titulo: 'O Hobbit uma jornada inesperada',
      imagem: 'https://images.justwatch.com/poster/8537318/s718/o-hobbit-uma-jornada-inesperada.%7Bformat%7D'

    }
  ])
  const novoFilme = {
    id: 3,
    titulo: nomeFilme.trim(),
    imagem: imagemFilme,
    
}
  function salvarFilme(evento) {
    evento.preventDefault()
        
    if (nomeFilme  === "" || imagemFilme === ""){
        setFormularioErro(true)
    }else if (nomeFilme.length() >2 || imagemFilme.length() >6 ) {
        setFormularioErro(false)
        setAllFilmes([...allFilmes, novoFilme])
        setNomeFilme("")
        setImagemFilme("")
        
    }
 } 

  return (
    <div className="App">
     <h1>Filmes Favoritos </h1>
     <form onSubmit={event => salvarFilme(event)}>
     <div className={formularioErro ? 'form-error' : 'imputs'}  >
                    <div>
                        <label htmlFor="nomeFilme">Nome Filme</label>
                        <input id='nomeFilme' type="text" value={nomeFilme} onChange={event=> setNomeFilme(event.target.value)}/>
                    </div>            
                    <div>
                        <label htmlFor="imagemFilme">Imagem Produto</label>
                        <input id='imagemFilme' type="text" value={imagemFilme} onChange={event=> setImagemFilme(event.target.value)}/>
                    </div>
                    {
                formularioErro ? (
                    <span><strong>O seu formulário contem erros no preenchimento</strong></span>
                ) : null
            }
                </div>
                <button type='submit'>Salvar Filme</button>

     </form>
     <section className='filme'>
            {
              allFilmes.map(filme =>{
                return(
                  <Card
                  key= {filme.id}
                  item ={filme}
                  />)
              })

            }
    </section>
    </div>
  )
}

export default App