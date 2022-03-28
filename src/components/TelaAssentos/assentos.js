import { useState } from "react"

export default function Assentos({elemento}) {
   
    const [selecionado, setSelecionado] = useState(false);
  /*  const [assento, setAssento] = useState(0)*/
    let classeCss = selecionado  ? "bolinhas selecionado2" : "bolinhas disponivel2"
    /*let id = selecionado ? setAssento() : setAssento(assento - 1)*/
    function Change (){
        if(selecionado) {
            setSelecionado(false)
        } else {
            setSelecionado(true)
        }
    } 

    return(
            <div className={classeCss} onClick= {() =>Change()}> <h2>{elemento}</h2></div>
    )}
