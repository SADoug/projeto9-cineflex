import "./style.css";
import "./style.css";
import { Link, useParams, useLocation } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Footer from "./Footer"
import Assentos from "./assentos";

function TelaAssentos() {
    const { idSessao } = useParams();
    const [name, setName] = useState([]);
    const [footer, setFooter] = useState([]);
   

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((result) => {
            setName(result.data.seats);
            
            setFooter(result.data.movie);
            console.log(result.data.movie)
        })
    }, [])


   /* function EnviarDados(){
          
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
       
        nome: nome,
            cpf: cpf 
            ids:
        });console.log("funfa") 

    }    
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [idis, setIds] = useState([])*/


    const [compradorNome, setCompradornome] = useState("")
function mudançanome(event){
setCompradornome(event.target.value)
}
const [compradorcpf, setCompradorcpf] = useState("")
function mudançacpf(event){
    setCompradorcpf(event.target.value)
}
const location = useLocation()
const {data, elemento} = location.state;

console.log(footer.title)

    return ( 
        
        <div className="TelaAssentos">
            <div className="titulo">
                <h1>Selecione o horário</h1>
            </div>
           
                <div className="conteudo">
                    {name.map((elemento) => {
                        return elemento.isAvailable ? (<Assentos  elemento ={elemento.name} id ={elemento.id} dados ={name}/>) :
                        (<div className= "bolinhas indisponivel2" onClick={() => alert("Esse assento não está disponivel")} > <h2>{elemento.name}</h2></div>)
                    })}
                </div>

                <div className="status">
                    <div className= "selecionado">
                        <div></div>
                        <h1>selecionado</h1>
                    </div>
                    <div className="disponivel">
                        <div></div>
                        <h1>Disponivel</h1>
                    </div>
                    <div className="indisponivel">
                        <div></div>
                        <h1>indisponivel</h1>
                    </div>
                </div>
                <div className="dados">
                    <form >
                    <div className="nome">
                        <h1>Nome do comprador:</h1>
                        <input type="text" required value={compradorNome} onChange={mudançanome}  placeholder="Digite seu nome"></input>
                    </div>
                    <div className="cpf">
                        <h1>CPF do comprador:</h1>
                        <input type="text" required  value={compradorcpf} onChange={mudançacpf} placeholder="Digite seu CPF" maxLength="11" minLength="11" pattern="[0-9]+"></input>
                    </div>
                    </form>
                </div>
                
                <Link to={`/sucesso`} state={{
                    nome: compradorNome 
                    ,cpf: compradorcpf
                    ,titulo: footer.title,
                    datas: {data},
                    horario:{elemento} 
                }} > <div  className="reserva"><p>Reservar assento(s)</p></div> </Link>
           
             
            <Footer imagem={footer.posterURL} titulo={footer.title} horario={footer.name} weekday={footer.weekday}/>
        </div>

    )
}
export default TelaAssentos;

