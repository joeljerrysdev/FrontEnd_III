import { useState, useEffect } from "react";
export function DecimaAula() {
  const [contador, setContador] = useState(0);
  function adicionar(){
    setContador(contador +1)
  }
  useEffect(() => {
    console.log('teste')
  }, []);
  return <>
  <p> O valor do contador é: {contador}</p>
  <button onClick={()=>{adicionar()}}>Adicionar</button>
  
  </>;
}
