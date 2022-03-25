import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import "./style.css";

export default function HomePage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            console.log(resposta.data)
            setItems(resposta.data);
        })
    }, []);

     if (items === null) {
         return <img src="loading.gif" />;
     }

    return (
        <div className="HomePage">
            <div className="titulo">
                <h1>Selecione o filme</h1>
            </div>
            <div className='conteudo'>
                {items.map((item,index)=>{
                    return(
                        <div className='filme'>
                           <Link to={`/sessoes/${item.id}`}> <img src={item.posterURL} alt={item.name}/> </Link>
                        </div>

                    )
                })}
            </div>
        </div>
           
    )
}
