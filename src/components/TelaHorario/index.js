import "./style.css";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Footer from "../Footer/Footer";


function TelaHorario() {
    const { idFilme } = useParams();
    const [ times, setTimes ] = useState([]);
    const [footer, setFooter] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((result) => {
            setTimes(result.data.days);
            setFooter(result.data);
            console.log(result.data)
        })
    }, [])

    console.log(times)
   

    return (
        <div className="TelaHorario">
            <div className="titulo">
                <h1>Selecione o horário</h1>
            </div>
            <div className="Conteudo">
            {times.map((time) => {
                    return (
                        <div className="conteudo" key={time.id}>
                            <h1>{time.weekday}/{time.date}</h1>
                            <div className="horarios">
                                {times.map((time2) => {
                            <div className="horario">{time.showtime[0].name}</div>
                            <div className="horario1">{time.showtime[1].name}</div>
                                })}
                            </div>
                        </div>
                    )
                })} 

            <Footer  imagem = {footer.posterURL} titulo = {footer.title} />
            </div>
        </div>
    )
}

export default TelaHorario;