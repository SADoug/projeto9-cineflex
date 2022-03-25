import "./style.css";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Footer from "../Footer/Footer";


function TelaHorario() {
    const { idFilme } = useParams();
    const [times, setTimes] = useState([]);
    const [footer, setFooter] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((result) => {
            setTimes(result.data.days);
            setFooter(result.data);
            console.log(result.data.title)
        })
    }, [])

    

    return (
        <div className="TelaHorario">
            <div className="titulo">
                <h1>Selecione o horário</h1>
            </div>
            <div className="Conteudo">
                {times.map((time, index) => {

                    const { weekday, date, showtimes } = time;

                    console.log(showtimes)

                    return (
                        <div className="conteudo" key={index} >
                            <h1>{weekday} - {date}</h1>

                            <div className="horarios">
                                {showtimes.map((elemento) => {
                                    return (<Link to={`/assentos/${elemento.id}`}> <div className="horario">{elemento.name}</div> </Link>)
                                })}
                            </div>
                        </div>
                    )
                })}

                <Footer imagem={footer.posterURL} titulo={footer.title} />
            </div>
        </div>
    )
}

export default TelaHorario;