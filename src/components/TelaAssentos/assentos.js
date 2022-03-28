import { useState } from "react"

export default function Assentos({elemento}) {
    const [selecionado, setSelecionado] = useState(false);
    let classeCss = selecionado  ? "bolinhas selecionado2" : "bolinhas disponivel2"
    
    function Change (){
        if(selecionado) {
            setSelecionado(false)
        } else {
            setSelecionado(true)
        }
    } 

    return(
    <div className={classeCss} onClick= {() =>Change()} > <h2>{elemento}</h2></div>
    )}
