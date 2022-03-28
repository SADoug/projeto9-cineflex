import "./style.css";
import "./style.css";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Footer from "../Footer/Footer";
import Assentos from "./assentos";

function TelaAssentos() {
    const { idSessao } = useParams();
    const [name, setName] = useState([]);
    const [footer, setFooter] = useState([]);
   

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((result) => {
            setName(result.data.seats);
            console.log(result.data.seats[1].isAvailable)
            setFooter(result.data.movie);
            console.log(result.data)
        })
    }, [])

    return (
        <div className="TelaAssentos">
            <div className="titulo">
                <h1>Selecione o horário</h1>
            </div>
           
                <div className="conteudo">
                    {name.map((elemento) => {
                        return elemento.isAvailable ? (<Assentos  elemento ={elemento.name}/>) :
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
                    <form>
                    <div className="nome">
                        <h1>Nome do comprador:</h1>
                        <input type={"Digite seu nome"}></input>
                    </div>
                    <div className="cpf">
                        <h1>CPF do comprador:</h1>
                        <input type={"Digite seu CPF"}></input>
                    </div>
                    </form>
                </div>
                <Link to={`/sucesso`} > <div className="reserva"><p>Reservar assento(s)</p></div> </Link>
           

            <Footer imagem={footer.posterURL} titulo={footer.title} />
        </div>

    )
}
export default TelaAssentos;