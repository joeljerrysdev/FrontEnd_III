//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className="card-filme">
      <img src={props.item.imagem}/>
      <h1>{props.item.titulo}</h1>

    </div>
  )
}