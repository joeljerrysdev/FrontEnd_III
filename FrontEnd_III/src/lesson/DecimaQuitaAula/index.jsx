import { DecimaQuintaAulaComponentes } from "../../components/DecimaQuintaAulaComponentes";
import "./style.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
export function DecimaQuintaAula() {
  const [location, setLocation] = useState([]);
  const [cep, setCep] = useState("");
  const { id } = useParams()
  console.log(id)

  function searchCep(cepReceived) {
    setCep(cepReceived);
  }

  return (
    <div className="decima-quinta-aula">
      <form>
        <h1>Cadastrar Endereços</h1>
        <div>
          <label>Cep</label>
          <input
            type="number"
            value={cep}
            onChange={(event) => searchCep(event.target.value)}
          />
        </div>
        <button>Cadastrar</button>
      </form>
      <section className="locations">
        
        {
            location.map(
                (location, index)=>{
                    <DecimaQuintaAula
                    key={index}
                    data={location}
                    />
                }
            )
            
        }

      </section>
    </div>
  );
}
